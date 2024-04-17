// Project files
import Candidate from "../../types/Candidate";
import HeaderCandidate from "../header-candidate/HeaderCandidate";
import ItemBadge from "../item-badge/ItemBadge";
import ItemCandidate from "../item-candidate/ItemCandidate";
import ItemCompany from "../item-company/ItemCompany";
import "./row-candidate.css";

export default function RowCandidate(item: Candidate) {
  return (
    <tr className="row-candidate">
      <HeaderCandidate
        id={item.id}
        candidate_image_url={item.candidate_image_url}
        company_image_url={item.company_image_url}
      />
      <td className="id column-small" data-label="Profile">
        {item.id}
      </td>
      <td className="candidate column-big" data-label="Candidate">
        <ItemCandidate
          candidate_image_url={item.candidate_image_url}
          candidate_name={item.candidate_name}
          candidate_job_title={item.candidate_job_title}
        />
      </td>
      <td className="company column-big" data-label="Company">
        <ItemCompany
          company_image_url={item.company_image_url}
          title={item.company_name}
          duration={item.company_duration_in_months}
        />
      </td>
      <td className="notes column-big" data-label="Notes">
        <small>{item.notes}</small>
      </td>
      <td className="relevance column-medium" data-label="Relevance">
        <ItemBadge
          color={"gray"}
          value={item.relevance}
          title={"foo"}
          subtitle=""
        />
      </td>
      <td className="contact column-medium" data-label="Contact">
        <ItemBadge
          color={"gray"}
          value={item.contact_status}
          title={"bar"}
          subtitle="jazz"
        />
      </td>
    </tr>
  );
}
