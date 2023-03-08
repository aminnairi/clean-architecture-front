import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { Main } from "./main";

const rootElement = document.getElementById("root");

if (!(rootElement instanceof HTMLDivElement)) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
