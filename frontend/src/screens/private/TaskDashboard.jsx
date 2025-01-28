import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { MoreHorizontal } from "lucide-react";
import { InitialData } from "../../data";

const TaskDashboard = () => {
  const [columns, setColumns] = useState(InitialData);
  const [dragging, setDragging] = useState(false); // Track dragging state

  const onDragStart = () => {
    setDragging(true); // Set dragging state when drag starts
  };

  const onDragEnd = (result) => {
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
  };

  return (
    <div className="min-h-screen bg-[#1a1c37] p-5">
      <header className="mb-8">
        <h1 className="text-xl font-semibold text-white">
          SNK-2244 Contact manager improvements (28 tasks)
        </h1>
      </header>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((column) => (
            <div key={column.id} className="flex flex-col">
              <div className="bg-purple-2 backdrop-sepia rounded-xl px-2 py-3">
                <h2 className="mb-4 text-sm font-medium text-gray-400">
                  {column.title}
                </h2>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-col gap-3"
                    >
                      {column.tasks.map((task, index) => (
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
                              className="rounded-lg bg-purple-1 p-4"
                            >
                              <div className="flex items-start justify-between">
                                <div className="space-y-3">
                                  <div className="text-sm text-gray-400">
                                    {task.id}
                                  </div>
                                  <h3 className="text-sm font-medium text-white">
                                    {task.title}
                                  </h3>
                                </div>
                                {/* Only show button if not dragging */}
                                {!dragging && (
                                  <button className="text-white">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskDashboard;
