// Project files
import ImageSquare from "components/image-square/ImageSquare";
import monthsToYears from "scripts/monthsToYears";
import "./item-company.css";

interface Props {
  /** URL of the company's logo the candidate is currently working. */
  company_image_url: string;

  /** The name of the company the candidate is currently working. */
  company_name: string;

  /** Duration the candidate has been working at the current company, in months. */
  company_duration_in_months: number;
}

/** Shows the company details of the candidate. */
export default function ItemCompany(item: Props) {
  const { company_image_url, company_name, company_duration_in_months } = item;

  // Properties
  const monthsInAYear = 12;
  const durationInyears = monthsToYears(company_duration_in_months);
  const shortDuration = company_duration_in_months < monthsInAYear ? "red" : "";

  return (
    <div className="item-company">
      <ImageSquare src={company_image_url} alt="The company logo" />
      <div className="content">
        {company_name}
        <small className={`label ${shortDuration}`}>{durationInyears}</small>
      </div>
    </div>
  );
}
