// Project files
import Candidate from "../../types/Candidate";
import HeaderCandidate from "../header-candidate/HeaderCandidate";
import ItemBadge from "../item-badge/ItemBadge";
import ItemCandidate from "../item-candidate/ItemCandidate";
import ItemCompany from "../item-company/ItemCompany";
import { data } from "./helpers/data";
import "./row-candidate.css";

/** A row containing the complete candidate information. */
export default function RowCandidate(item: Candidate) {
  // Properties
  const { header, candidate, company, relevance, contact } = data(item);

  return (
    <tr className="row-candidate">
      <HeaderCandidate {...header} />
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
