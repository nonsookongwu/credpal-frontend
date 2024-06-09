import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    // children: [
    //   { index: true, element: <LandingPage /> },
    //   { path: "services", element: <Services /> },
    //   { path: "menu", element: <Menu /> },
    //   { path: "contact", element: <Contact /> },
    // ],
  },
]);

export default router;
