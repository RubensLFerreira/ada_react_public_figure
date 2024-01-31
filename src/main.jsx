import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";

import { App } from "./App.jsx";
import { Home } from "./pages/Home";
import { DetailsFigure } from "./pages/DetailsFigure";
import { CreateFigure } from "./pages/CreateFigure/index";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Search } from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/:id" element={<DetailsFigure />} />
          <Route path="/cadastrar" element={<CreateFigure />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="search-name" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
