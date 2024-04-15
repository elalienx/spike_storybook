// Project files
import PlaceholderCandidate from "../../assets/placeholder-candidate.png";
import PlaceholderCompany from "../../assets/placeholder-company.png";
import "./candidate-header.css";

interface iProps {
  /** The name of the candidate */
  candidate: string;

  /** The name of the company */
  company: string;
}

/** A mobile component for table rows, styled to resemble a social media platform */
export default function CandidateHeader({ candidate, company }: iProps) {
  const sourceCandidate = candidate === "" ? PlaceholderCandidate : candidate;
  const sourceCompany = company === "" ? PlaceholderCompany : company;

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
    </header>
  );
}
