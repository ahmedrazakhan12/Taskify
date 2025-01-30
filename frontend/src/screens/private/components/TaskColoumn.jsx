import { Droppable } from "@hello-pangea/dnd";
import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({
  column,
  dragging,
  onDragStart,
  onDragEnd,
  setRequestSent,
  requestSent,
  setModal,
}) => {
  console.log("setRequestSent2", setRequestSent);

  return (
    <div key={column.id} className="flex flex-col">
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
                  <TaskCard
                    key={task.id}
                    setRequestSent={setRequestSent}
                    requestSent={requestSent}
                    task={task}
                    index={index}
                    setModal={setModal}
                    draggableId={task.id}
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    dragging={dragging}
                  />
                ))
              ) : (
                <div>
                  <hr />
                  <p className="text-gray-200 mt-1">🚫 No tasks</p>
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TaskColumn;
