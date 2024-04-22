// Project files
import Card from "components/card/Card";
import Loader from "components/loader/Loader";
import Assignment from "types/Assignment";
import Status from "types/Status";
import Footer from "./helpers/Footer";
import Hero from "./helpers/Hero";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import "./assignments.css";
import CardNew from "components/card-new/CardNew";

interface Props {
  /** The assignments comming from the database. */
  data: any;

  /** The status of calling the server. */
  status: Status;
}

/** The homepage of Scoutr and the place to create new assignments. */
export default function Assignments(item: Props) {
  // Local state
  const { data, status } = item;

  // Components
  const Cards = data.map((item: Assignment) => (
    <Card key={item.id} {...item} />
  ));
  Cards.push(<CardNew key={data.length + 1} />);

  return (
    <div id="assignments">
      <Hero />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty />}
        {status === "error" && <StateError />}
        {status === "content" && Cards}
      </section>
      <Footer />
    </div>
  );
}
