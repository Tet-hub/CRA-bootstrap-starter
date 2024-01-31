import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroPage from "../pages/HeroPage";
import ServicePage from "../pages/ServicePage";
import AboutPage from "../pages/AboutPage";

const RoutePath = [
  { path: "/", element: <HeroPage /> },
  { path: "/service", element: <ServicePage /> },
  { path: "/about", element: <AboutPage /> },
];

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RoutePath.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
