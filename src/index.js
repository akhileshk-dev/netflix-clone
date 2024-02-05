import react from "react";
import reactdom from "react-dom/client";
import App from "./App.js";
import "./index.css"
const root=reactdom.createRoot(document.getElementById("root"));
root.render(
    <App/>
)