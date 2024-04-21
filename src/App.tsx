// Node modules
import { useState } from "react";

// Project files
import Badge from "components/badge/Badge";
import Button from "components/button/Button";
import Card from "components/card/Card";
import "./styles/style.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Vite + React</h1>
      <Button
        icon="folder-open"
        label={`Count is ${count}`}
        primary={false}
        onClick={() => setCount((count) => count + 1)}
      />
      <Badge color="red" value={5} />
      <Card
        id={1}
        date_created={"2024"}
        assignment_name={"Master Data Specialist"}
        company_name={"McDonalds"}
        company_image_url={""}
      />
    </div>
  );
}
