import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Loader2, MoreHorizontal } from "lucide-react";
import { InitialData } from "../../data";
import { GetAuthData } from "../../helpers/Index";
import Header from "../../components/ui/header/Header";
import { formatData, getRequest, postRequest } from "../../helpers/Functions";
import Button from "../../components/ui/button/Button";

const TaskDashboard = ({ isModalOpen, requestSent }) => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  console.log("isModalOpen", isModalOpen);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getRequest("tasks");
      const formattedData = formatData(data);
      setColumns(formattedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [requestSent]);

  const onDragStart = () => {
    setDragging(true); // Set dragging state when drag starts
  };

  const onDragEnd = async (result) => {
    setDragging(false); // Reset dragging state when drag ends
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

    const taskId = result.draggableId;
    const newStatus = destination.droppableId;

    console.log(taskId, newStatus);

    try {
      await postRequest("tasks/update-status", {
        taskId: Number(taskId),
        status: newStatus,
      });
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <Header username={GetAuthData?.username} email={GetAuthData?.email} />
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 `}
        >
          {columns.map((column) => (
            <div key={column.id} className="flex flex-col">
              {!isModalOpen && (
                <div className="bg-purple-2 backdrop-sepia rounded-xl px-2 py-3">
                  <h2 className="mb-4 text-sm font-medium text-gray-300 capitalize">
                    {column.title}
                  </h2>
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex flex-col gap-3"
                      >
                        {column.tasks && column.tasks.length > 0 ? (
                          column.tasks.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="rounded-lg bg-purple-1 p-4 cursor-move" // Added cursor-move here
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="space-y-3">
                                      <div className="text-sm text-gray-400">
                                        {task?.title}
                                      </div>
                                      <p className="text-sm font-medium text-white">
                                        {task?.description}
                                      </p>
                                    </div>
                                    {!dragging && (
                                      <button className="text-white">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))
                        ) : (
                          <>
                            <hr />
                            <p className="text-gray-200">🚫No tasks</p>
                          </>
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              )}
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskDashboard;
