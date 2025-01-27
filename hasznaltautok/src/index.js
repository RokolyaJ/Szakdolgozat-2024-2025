import React from "react";
import ReactDOM from "react-dom/client"; // Használjuk a "react-dom/client"-et az új API-hoz
import App from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root")); // Új root létrehozása
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
