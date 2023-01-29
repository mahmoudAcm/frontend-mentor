import { lazy, Suspense } from "react";
import { createHashRouter, Outlet } from "react-router-dom";

//components
import MainLayout from "./components/layouts/main";
const Home = lazy(() => import("./components/home"));
const Detail = lazy(() => import("./components/detail"));
import Loader from "./components/loader";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: "countries",
        element: <Home />,
      },
      {
        path: "countries/:name",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
