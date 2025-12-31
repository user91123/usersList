import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./providers/appStore";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./providers/appRouter";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
