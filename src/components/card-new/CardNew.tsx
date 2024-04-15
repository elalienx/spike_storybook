// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Placeholder from "../../assets/placeholder-company.png";
import "./card-new.css";

/** UI component to create a new assignment */
export default function CardNew() {
  return (
    <article className="card card-new">
      <img src={Placeholder} alt="A generic building" />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <button className="button primary small">
        <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
        New assignment
      </button>
    </article>
  );
}
