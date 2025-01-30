import React, { useState } from "react";
import { NotebookPenIcon, ChartPieIcon } from "lucide-react";
import Input from "../../../components/ui/input/StyledInput";
import TextArea from "../../../components/ui/textarea/TextArea";
import Select from "../../../components/ui/select/Select";
import Button from "../../../components/ui/button/Button";
import { postRequest } from "../../../helpers/Functions";
import { taskStatuses } from "../../../data";
import toast from "react-hot-toast";

export const AddTasks = ({ closeModal, setRequestSent }) => {
  const initialState = { title: "", description: "", status: "" };
  const [task, setTask] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await postRequest("tasks", JSON.stringify(task));
      toast.success("Task Added Successfully!");
      setTask(initialState); // Reset state to initial values
      setRequestSent(true);
      setLoading(false);
      closeModal();
    } catch (err) {
      setLoading(false);
      const errorMessage =
        err.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <p className="font-Monsterrat font-bold text-center mb-2 text-gray-300 text-[17px]">
        Create a New Task
      </p>
      <Input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Enter Your Task Heading"
        prefixIcon={<NotebookPenIcon className="w-5 h-5 text-gray-400" />}
      />
      <TextArea
        className="my-4 h-[100px]"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Enter Your Task's Description"
        prefixIcon={<NotebookPenIcon className="w-5 h-5 text-gray-400" />}
      />
      <Select
        name="status"
        options={taskStatuses}
        prefixIcon={<ChartPieIcon className="w-5 h-5 text-gray-400" />}
        selectedValue={task.status}
        onChange={handleChange}
        placeholder="Choose Task Status"
      />
      <div className="flex justify-end gap-4 mt-4">
        <Button
          label="Discard"
          type="button"
          onClick={closeModal}
          disabled={loading}
          className="rounded-md text-center w-24 justify-center"
        />
        <Button
          loading={loading}
          label="Save"
          type="button"
          onClick={handleSave}
          className="rounded-md text-center w-24 justify-center"
        />
      </div>
    </>
  );
};
