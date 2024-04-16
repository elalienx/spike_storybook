// Project files
import ImageSquare from "../image-square/ImageSquare";
import "./item-profile.css";

interface Props {
  /** The candidate or company image url */
  image_url: string;

  /** Do the image belong to a candidate or company? To set up the correct placeholder image */
  isCandidate: boolean;

  /** The name of the candidate or company */
  title: string;

  /** Complementary details for the candidate or company */
  subtitle: string;
}

/** Shows the details of a candidate or company. */
export default function ItemProfile(item: Props) {
  const { image_url, isCandidate, title, subtitle } = item;

  // Properties
  const Profile = isCandidate ? "candidate" : "company";

  return (
    <div className="item-profile">
      <ImageSquare src={image_url} profile={Profile} />
      <div className="content">
        {title}
        <small className="label">{subtitle}</small>
      </div>
    </div>
  );
}
