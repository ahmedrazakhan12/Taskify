import React, { useEffect, useState, useCallback } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { GetAuthData } from "../../helpers/Index";
import Header from "../../components/ui/header/Header";
import { formatData, getRequest, postRequest } from "../../helpers/Functions";
import TaskColoumn from "./components/TaskColoumn";
import toast from "react-hot-toast";

const TaskDashboard = ({ requestSent, setModal, setRequestSent }) => {
  const [columns, setColumns] = useState([]);
  const [dragging, setDragging] = useState(false);

  console.log("requestSent", requestSent);
  let toastId;

  const fetchData = useCallback(async () => {
    try {
      const data = await getRequest("tasks");
      toast.loading("Loading...");
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 200);
      const formattedData = formatData(data);
      setColumns(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [requestSent, fetchData]);

  const onDragStart = () => setDragging(true);
  const onDragEnd = async (result) => {
    setDragging(false);

    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const newColumns = [...columns];
    const sourceColIndex = columns.findIndex(
      (col) => col.id === source.droppableId
    );
    const destColIndex = columns.findIndex(
      (col) => col.id === destination.droppableId
    );

    const [movedTask] = newColumns[sourceColIndex].tasks.splice(
      source.index,
      1
    );
    newColumns[destColIndex].tasks.splice(destination.index, 0, movedTask);
    setColumns(newColumns);

    try {
      await postRequest("tasks/update-status", {
        taskId: Number(result.draggableId),
        status: destination.droppableId,
      });
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <Header username={GetAuthData?.username} email={GetAuthData?.email} />
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((column) => (
            <TaskColoumn
              setModal={setModal}
              requestSent={requestSent}
              setRequestSent={setRequestSent}
              key={column.id}
              column={column}
              dragging={dragging}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskDashboard;
