import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading....</div>}>
      <App />
    </React.Suspense>
  </BrowserRouter>
);
