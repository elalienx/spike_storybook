// Project files
import Button from "components/button/Button";
import ImageSquare from "components/image-square/ImageSquare";
import "./card.css";
import "./card-new.css";

/** UI element to create a new assignment. Does not have modificable properties. */
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
