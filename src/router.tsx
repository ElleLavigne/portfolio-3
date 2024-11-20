import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { AboutMe } from "./pages/about/about-me";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
      },
    {
        path: "/about-me",
        element: <AboutMe/>
      },
])
    
