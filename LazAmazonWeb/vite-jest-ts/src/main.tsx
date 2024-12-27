import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//
// TODO: Remove these style to stop forcing it to be mobile-like
const root = document.getElementById("root"); // @ts-ignore
root.style.maxWidth = "420px"; // @ts-ignore
root.style.margin = "auto"; // @ts-ignore
root.style.border = "2px solid gray";
// @ts-ignore
document.getElementById("searchHeader").style.maxWidth = "420px";
//
