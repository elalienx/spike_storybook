// Node modules
import { useState } from "react";

// Project files
import logoReact from "./assets/react.svg";
import logoVite from "/vite.svg";
import Badge from "./components/badge/Badge";
import "./styles/style.css";
import Button from "./components/button/Button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div>
        <img src={logoVite} className="logo" alt="Vite logo" />
        <img src={logoReact} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <Button
        icon="folder-open"
        label={`Count is ${count}`}
        primary={false}
        onClick={() => setCount((count) => count + 1)}
      />
      <Badge color="red" value={5} />
    </div>
  );
}
