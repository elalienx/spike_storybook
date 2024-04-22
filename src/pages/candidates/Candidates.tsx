// Project files
import Status from "types/Status";
import "./candidates.css";

interface Props {
  /** The assignments comming from the database. */
  data: any;

  /** The status of calling the server. */
  status: Status;
}

/** The page with the candidate table where you can add more LinkedIn profiles by pressing one button. */
export default function Candidates(item: Props) {
  return (
    <div id="assignments">
      <h1>Candidates</h1>
      <p>⚠️ Work in progress...</p>
    </div>
  );
}
