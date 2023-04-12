import { lazy, Suspense } from "react";
import { createHashRouter, Outlet } from "react-router-dom";

//components
import MainLayout from "./components/layouts/main";
import Loader from "./components/loader";

//pages
const HomePage = lazy(() => import("./pages/home"));
const DetailPage = lazy(() => import("./pages/detail"));

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
        element: <HomePage />,
      },
      {
        path: "countries/:name",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
