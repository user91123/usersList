import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { UsersPage } from "@/02_pages/main/ui";
import { FavoritesPage } from "@/02_pages/favorites/ui";
import { ErrorPage } from "@/02_pages/error";
import { NotFoundPage } from "@/02_pages/notFound";
import { store } from "./appStore";
import { api } from "@/05_entities/user/api/usersApi";

const usersLoader = async () => {
  const promise = store.dispatch(api.endpoints.getUsers.initiate());

  try {
    await promise;
  } catch (error) {
    console.error("Failed to load users:", error);
  } finally {
    promise.unsubscribe();
  }

  return null;
};

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
        loader: usersLoader,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
