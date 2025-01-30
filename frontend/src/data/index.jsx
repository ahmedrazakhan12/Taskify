import { ROUTES } from "../routes";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import TaskDashboard from "../screens/private/TaskDashboard";

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.REGISTER, element: <Register /> },
];
export const privateRoutes = [
  { path: ROUTES.TASK_DASHBOARD, element: <TaskDashboard /> },
];
export const taskStatuses = [
  { value: "todo", label: "To do" },
  { value: "in-progress", label: "In Progress" },
  { value: "review", label: "Review" },
  { value: "done", label: "Done" },
];

export const InitialData = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "SNC-248",
        title: "Sharing contacts via social media",
        description: "Sharing contacts via social media",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "SNC-248",
        title: "Sharing contacts via social media",
        description: "Sharing contacts via social media",
      },
    ],
  },
];

