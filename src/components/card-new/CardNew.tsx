// Project files
import ImageSquare from "../image-square/ImageSquare";
import Button from "../button/Button";
import "./card.css";
import "./card-new.css";

/** UI component to create a new assignment. It has not modificable properties. */
export default function CardNew() {
  return (
    <article className="card card-new">
      <ImageSquare src={""} alt="A generic building" />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button label={"New assignment"} primary={true} icon="plus" />
    </article>
  );
}
