import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import routes from "@/routes";

import "@/styles/index.scss";
import "swiper/css";
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
