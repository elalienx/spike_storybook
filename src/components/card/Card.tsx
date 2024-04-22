// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import Assignment from "types/Assignment";
import "./card.css";

/** UI element to visualize an assignment. */
export default function Card(item: Assignment) {
  const { assignment_name, company_name, company_image_url } = item;

  return (
    <article className="card">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <h2>{assignment_name}</h2>
      <small className="label">{company_name}</small>
      <Button label={"Open"} primary={false} icon="folder-open" />
    </article>
  );
}
