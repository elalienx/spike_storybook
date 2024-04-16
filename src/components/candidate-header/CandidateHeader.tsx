// Project files
import PlaceholderCandidate from "../../assets/placeholder-candidate.png";
import PlaceholderCompany from "../../assets/placeholder-company.png";
import "./candidate-header.css";

interface Props {
  /** The unique indentifier of the candidate */
  id: number;

  /** The name of the candidate */
  candidate: string;

  /** The name of the company */
  company: string;
}

/** A mobile component for table rows, styled to resemble a social media platform. */
export default function CandidateHeader({ id, candidate, company }: Props) {
  // Properties
  const sourceCandidate = candidate ? candidate : PlaceholderCandidate;
  const sourceCompany = company ? company : PlaceholderCompany;

  return (
    <header className="candidate-header">
      <img
        className="candidate-image"
        src={sourceCandidate}
        alt="Candidate profile picture"
      />
      <img
        className="company-image"
        src={sourceCompany}
        alt="Candidate current company logo"
      />
      <small className="label">Profile #{id}</small>
    </header>
  );
}
