import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

const overlay = document.getElementById('loading-overlay');
if (overlay) {
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.remove(); }, 500);
  }, 100);
}
