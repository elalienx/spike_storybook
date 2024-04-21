// Project files
import Company from "assets/placeholder-company.png";
import Candidate from "assets/placeholder-candidate.png";
import "./image-square.css";

interface Props {
  /** The source of the image. */
  src: string;

  /** Optional CSS classes for styling. */
  className?: string;

  /** The description for accebility readers. */
  alt?: string;

  /** The type of placeholder to use. Defaults to company as its the most used. */
  profile?: "candidate" | "company";
}

/** Provides a square image with a placeholder. */
export default function ImageSquare(item: Props) {
  const { src, className, alt, profile = "company" } = item;

  // Properties
  const Placeholder = profile === "company" ? Company : Candidate;
  const Source = src || Placeholder;

  return <img src={Source} className={`image-square ${className}`} alt={alt} />;
}
