// Project files
import Assignment from "../../types/Assignment";
import Button from "../button/Button";
import "./card.css";

/** UI component to visualize an assignment */
export default function Card(item: Assignment) {
  const { assignment_name, company_name, company_image_url } = item;

  return (
    <article className="card">
      <img src={company_image_url} alt="The company logo" />
      <h2>{assignment_name}</h2>
      <small className="label">{company_name}</small>
      <Button label={"Open"} primary={false} icon="folder-open" />
    </article>
  );
}
