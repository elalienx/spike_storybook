// Project files
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import Status from "types/Status";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import Table from "./helpers/Table";
import "./candidates.css";

interface Props {
  /** The candidates belonging to an assignment. */
  data: any;

  /** The status of calling the server. */
  status: Status;
}

/** The page with the candidate table where you can add more LinkedIn profiles by pressing one button. */
export default function Candidates(item: Props) {
  // Local state
  const { data, status } = item;

  return (
    <div id="candidates">
      <NavigationBar
        assignment_name={""}
        company_image_url={""}
        response_rate={0}
      />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty />}
        {status === "error" && <StateError />}
        {status === "content" && <Table candidates={data} />}
      </section>
    </div>
  );
}
