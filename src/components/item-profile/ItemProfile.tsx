// Project files
import ImageSquare from "../image-square/ImageSquare";
import "./item-profile.css";

interface Props {
  /** Full name of the candidate */
  candidate_image_url: string;

  /** The name of the candidate */
  candidate_name: string;

  /** The job title of the candidate */
  candidate_job_title: string;
}

/** Shows the personal details of a candidate */
export default function ItemProfile(item: Props) {
  const { candidate_image_url, candidate_name, candidate_job_title } = item;

  // Properties
  const CharacterLimit = 20;
  const Ellipsis = candidate_job_title.length > CharacterLimit ? "..." : "";
  const JobTitle = candidate_job_title.slice(0, CharacterLimit) + Ellipsis;

  return (
    <div className="item-profile">
      <ImageSquare src={candidate_image_url} profile="candidate" />
      <div className="content">
        {candidate_name}
        <small className="label">{JobTitle}</small>
      </div>
    </div>
  );
}
