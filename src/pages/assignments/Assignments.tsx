// Project files
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Assignment from "../../types/Assignment";
import Status from "../../types/Status";
import Footer from "./Footer";
import Hero from "./Hero";
import "./assignments.css";

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
      <div className="container">
        <Hero />
        <section className="grid">
          {status === "loading" && <Loader />}
          {status === "empty" && <p>Empty 📭</p>}
          {status === "content" && Cards}
          {status === "error" && <p>Error ❌</p>}
        </section>
      </div>
      <Footer />
    </div>
  );
}
