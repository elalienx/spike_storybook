// Project files
import Candidate from "../../types/Candidate";
import HeaderCandidate from "../header-candidate/HeaderCandidate";
import ItemBadge from "../item-badge/ItemBadge";
import ItemCandidate from "../item-candidate/ItemCandidate";
import ItemCompany from "../item-company/ItemCompany";
import data from "./data";
import "./row-candidate.css";

/** A row containing the complete candidate information. */
export default function RowCandidate(item: Candidate) {
  const mobileHeader = {
    id: item.id,
    candidate_image_url: item.candidate_image_url,
    company_image_url: item.company_image_url,
  };
  const candidate = {
    candidate_image_url: item.candidate_image_url,
    candidate_name: item.candidate_name,
    candidate_job_title: item.candidate_job_title,
  };
  const company = {
    company_image_url: item.company_image_url,
    title: item.company_name,
    duration: item.company_duration_in_months,
  };
  const relevance = {
    color: data.relevance.colors[item.relevance],
    value: item.relevance,
    title: data.relevance.labels[item.relevance],
  };
  const contact = {
    color: data.contact.colors[item.contact_status],
    value: item.contact_status,
    title: data.contact.labels[item.contact_status],
    subtitle: item.contact_date,
  };

  return (
    <tr className="row-candidate">
      <HeaderCandidate {...mobileHeader} />
      <td className="id column-small" data-label="Profile">
        {item.id}
      </td>
      <td className="candidate column-big" data-label="Candidate">
        <ItemCandidate {...candidate} />
      </td>
      <td className="company column-big" data-label="Company">
        <ItemCompany {...company} />
      </td>
      <td className="notes column-big" data-label="Notes">
        <small>{item.notes}</small>
      </td>
      <td className="relevance column-medium" data-label="Relevance">
        {item.relevance ? <ItemBadge {...relevance} /> : null}
      </td>
      <td className="contact column-medium" data-label="Contact">
        {item.contact_status ? <ItemBadge {...contact} /> : null}
      </td>
    </tr>
  );
}
