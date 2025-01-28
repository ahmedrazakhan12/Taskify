import { ROUTES } from "../routes";
import TaskDashboard from "../screens/private/TaskDashboard";

export const publicRoutes = [
];

export const privateRoutes = [{ path: ROUTES.TASK_DASHBOARD, element: <TaskDashboard /> }];


export const InitialData = [
  {
    id: "todo",
    title: "TO DO",
    tasks: [
      {
        id: "SNC-248",
        title: "Sharing contacts via social media",
        assignee: {
          name: "Bradley Workman",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-267",
        title: "Direct messages and group chats",
        assignee: {
          name: "Dustin Fisher",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-275",
        title: "Scheduled calls and meetings for teams",
        assignee: {
          name: "Bela Torff",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-276",
        title: "Add search features for calendar view",
        assignee: {
          name: "Cooper Owens",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
    ],
  },
  {
    id: "in-progress",
    title: "IN PROGRESS",
    tasks: [
      {
        id: "SNC-176",
        title: "Import and export contact feature",
        assignee: {
          name: "Charles Dorwart",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-192",
        title: "More flexible filters for contact lists",
        assignee: {
          name: "Deborah Brown",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-244",
        title: "Add an ability to create separate teams",
        assignee: {
          name: "Alisia Williams",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
    ],
  },
  {
    id: "review",
    title: "REVIEW",
    tasks: [
      {
        id: "SNC-120",
        title: "Add shared sections to the main menu",
        assignee: {
          name: "Adison Kennedy",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-122",
        title: "Cloud backup feature for premium users",
        assignee: {
          name: "Diana George",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
    ],
  },
  {
    id: "done",
    title: "DONE",
    tasks: [
      {
        id: "SNC-88",
        title: "Add tags for different groups of contacts",
        assignee: {
          name: "Bradley Workman",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-65",
        title: "Public event feature integration",
        assignee: {
          name: "Bela Torff",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-72",
        title: "Add filters to scheduled event list",
        assignee: {
          name: "Alisia Williams",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
      {
        id: "SNC-37",
        title: "Add send email button to contact details",
        assignee: {
          name: "Aaron Philips",
          avatar:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QuRW3IUYrQQLW8Y2cKmJ1jjkKOOKaN.png",
        },
      },
    ],
  },
];

