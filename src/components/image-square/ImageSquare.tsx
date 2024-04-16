// Project files
import Company from "../../assets/placeholder-company.png";
import Candidate from "../../assets/placeholder-candidate.png";
import "./image-square.css";

interface Props {
  /** The URL of the image */
  image_url: string;

  /** The type of placeholder to use */
  profile?: "candidate" | "company";

  /** The description for accebility readers */
  alt?: string;
}

/** Provides a square image with placeholder */
export default function ImageSquare(item: Props) {
  const { image_url, profile = "company", alt } = item;

  // Properties
  const Placeholder = profile === "company" ? Company : Candidate;
  const Source = image_url || Placeholder;

  return <img src={Source} className="image-square" alt={alt} />;
}
