// Project files
import monthsToYears from "../../scripts/monthsToYears";
import ImageSquare from "../image-square/ImageSquare";
import "./item-company.css";

interface Props {
  /** URL of the company's logo the candidate is currently working */
  company_image_url: string;

  /** The name of the company the candidate is currently working */
  title: string;

  /** Duration the candidate has been working at the current company, in months */
  duration: number;
}

/** Shows the company details of the candidate. */
export default function ItemCompany(item: Props) {
  const { company_image_url, title, duration } = item;

  // Properties
  const monthsInAYear = 12;
  const durationInyears = monthsToYears(duration);
  const shortDuration = duration < monthsInAYear ? "red" : "";

  return (
    <div className="item-company">
      <ImageSquare src={company_image_url} alt="The company logo" />
      <div className="content">
        {title}
        <small className={`label ${shortDuration}`}>{durationInyears}</small>
      </div>
    </div>
  );
}
