import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './main.css';

import { App } from "./App.jsx";
import { Home } from "./pages/Home";
import { DetailsFigure } from "./pages/DetailsFigure";
import { CreateFigure } from './pages/CreateFigure/index';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/public-figure" element={<Home />} />
          <Route path="/public-figure/:id" element={<DetailsFigure />} />
          <Route path="/public-figure/cadastrar" element={<CreateFigure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
