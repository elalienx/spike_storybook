// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Assignment from "../../types/Assignment";
import "./card.css";

/** The component to visualize an assignment */
export default function Card(item: Assignment) {
  const { assignment_name, company_name, company_image_url } = item;

  return (
    <article className="card">
      <img src={company_image_url} alt="The company logo" />
      <h2>{assignment_name}</h2>
      <small className="label">{company_name}</small>
      <button className="button small">
        <FontAwesomeIcon className="icon" icon={["fas", "folder-open"]} />
        Open
      </button>
    </article>
  );
}
