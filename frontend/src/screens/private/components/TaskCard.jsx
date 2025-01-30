import { Draggable } from "@hello-pangea/dnd";
import { PencilOff, Trash2Icon } from "lucide-react";
import React from "react";
import { DeleteTasks, EditTasks } from "./Tasks";

const TaskCard = React.memo(
  ({
    task,
    index,
    draggableId,
    dragging,
    setModal,
    setRequestSent,
    requestSent,
  }) => {
    console.log("setRequestSent", setRequestSent);
    const openEditModal = () => {
      setModal({
        open: true,
        component: (
          <EditTasks
            setRequestSent={setRequestSent}
            taskDetails={task}
            requestSent={requestSent}
            setModal={setModal}
          />
        ),
      });
    };

    const openDeleteModal = () => {
      setModal({
        open: true,
        component: (
          <DeleteTasks
            setRequestSent={setRequestSent}
            taskDetails={task}
            requestSent={requestSent}
            setModal={setModal}
          />
        ),
      });
    };

    return (
      <Draggable key={task.id} draggableId={draggableId} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="rounded-lg bg-purple-1 p-4 cursor-move"
          >
            <div className="flex items-start justify-between ">
              <div className="space-y-3">
                <div className="text-sm text-gray-400">{task.title}</div>
                <p className="text-sm font-medium text-white ">
                  {task.description}
                </p>
              </div>
              {!dragging && (
                <div className="flex gap-2">
                  <button className="text-white" onClick={openEditModal}>
                    <PencilOff className="h-4 w-4 text-gray-400 hover:text-gray-200" />
                  </button>
                  <button className="text-white" onClick={openDeleteModal}>
                    <Trash2Icon className="h-4 w-4 text-gray-400 hover:text-gray-200" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Draggable>
    );
  }
);

export default TaskCard;
