import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const routeList = [
  {
    name: "ComponentTestPage",
    path: "/",
    component: lazy(() => import("@/pages/ComponentTestPage/ComponentTestPage")),
  },
];

const MainRouter: React.FC = () => {
  const renderedRoutes = routeList.map((item) => (
    <Route key={item.name} path={item.path} element={<item.component />} />
  ));

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>{renderedRoutes}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;
