import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. Tambahkan import ini
import App from "./app/App.tsx";
import "./styles/index.css";

// 2. Bungkus <App /> dengan <BrowserRouter>
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
