// Node modules
import { useState } from "react";

// Project files
import logoReact from "./assets/react.svg";
import logoVite from "/vite.svg";
import "./App.css";
import Badge from "./components/badge/Badge";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div>
        <img src={logoVite} className="logo" alt="Vite logo" />
        <img src={logoReact} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Badge color="red" value="5" />
    </div>
  );
}
