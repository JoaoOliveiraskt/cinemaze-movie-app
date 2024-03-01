import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
