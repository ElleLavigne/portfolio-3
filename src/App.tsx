import "./global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet titleTemplate="%s | pizza.shop" />

        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
