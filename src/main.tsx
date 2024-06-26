import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout.tsx";
import { CreateUser } from "./pages/CreateUser.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} index />
          <Route path="/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
