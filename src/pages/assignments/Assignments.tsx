// Project files
import ImageHero from "../../assets/assignments-hero.png";
import "./assignments.css";

export default function Assignments() {
  return (
    <div id="assignments" className="layout">
      <div className="container">
        {/* Hero */}
        <header className="hero">
          <div className="content">
            <h1>
              Meet
              <br />
              Scoutr
            </h1>
            <span className="subtitle">Your LinkedIn Headhunter Companion</span>
            <p>
              Scoutr revolutionizes your LinkedIn scouting experience, providing
              concise summaries of professionals presented in a easy table
              format.
            </p>
          </div>
          <div className="media">
            <img
              className="image"
              src={ImageHero}
              alt="A woman and a man sitting on a table looking at a laptop"
            />
          </div>
        </header>

        {/* Cards */}
        <ul className="no-bullets cards">(cards go here)</ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <small>© 2024 Eduardo Alvarez all rights reserved.</small>
        <small>
          GitHub:{" "}
          <a href="https://www.github.com/elalienx" target="_blank">
            github.com/elalienx
          </a>
        </small>
      </footer>
    </div>
  );
}
