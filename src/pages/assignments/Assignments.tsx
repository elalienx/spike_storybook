// Project files
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import StateAssignments from "../../components/state-assignments/StateAssignments";
import Assignment from "../../types/Assignment";
import Status from "../../types/Status";
import Footer from "./Footer";
import Hero from "./Hero";
import "./assignments.css";
import StateData from "../../data/page-states.json"

interface Props {
  data: any;
  status: Status;
}

export default function Assignments(item: Props) {
  // Local state
  const { data, status } = item;

  // Components
  const Cards = data.map((item: Assignment) => (
    <Card key={item.id} {...item} />
  ));

  return (
    <div id="assignments">
      <Hero />
      <section className="section">
        {status === "loading" && <Loader />}
        {status === "empty" && <StateAssignments {}/>}
        {status === "content" && <div className="columns">{Cards}</div>}
        {status === "error" && <p>Error ❌</p>}
      </section>
      <Footer />
    </div>
  );
}
