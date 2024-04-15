// Project files
import Placeholder from "../../assets/placeholder-company.png";
import Button from "../button/Button";
import "./card-new.css";

/** UI component to create a new assignment */
export default function CardNew() {
  return (
    <article className="card card-new">
      <img src={Placeholder} alt="A generic building" />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button label={"New assignment"} primary={true} icon="plus" />
    </article>
  );
}
