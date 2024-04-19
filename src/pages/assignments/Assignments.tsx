// Project files
import Footer from "./Footer";
import Hero from "./Hero";
import "./assignments.css";

export default function Assignments() {
  

  return (
    <div id="assignments">
      <div className="container">
        <Hero />
        {/* Cards */}
        <ul className="no-bullets cards">(cards go here)</ul>
      </div>
      <Footer />
    </div>
  );
}
