// Project files
import Logo from "../../assets/logo-scoutr.svg";
import Placeholder from "../../assets/placeholder-company.png";
import "./navigation-bar.css";

interface Props {
  /** The name of the current assignment */
  assignment_name: string;

  /** The company logo */
  company_image_url: string;

  /** How many candidates have responded to us after initial contact? No value indicates we haven't started to contact anyone yet */
  response_rate?: number | undefined;
}

/** The menu bar for the Candidate page. */
export default function NavigationBar(item: Props) {
  const { assignment_name, company_image_url, response_rate } = item;

  // Properties
  const Image = company_image_url ? company_image_url : Placeholder;

  // Components
  const KeepRightMargin = <div className="right div-to-keep-margin" />;
  const ResponseRate = (
    <div className="right response-rate">
      <span className="value">{response_rate}</span>
      <span className="symbol">%</span>
      <small className="label">Response rate</small>
    </div>
  );

  return (
    <nav className="navigation-bar">
      {/* Left */}
      <div className="left assignment">
        <img className="company-logo" src={Image} alt="Company logo" />
        <h1 className="title">{assignment_name}</h1>
      </div>

      {/* Midle */}
      <img className="middle logo" src={Logo} />

      {/* Right */}
      {response_rate === undefined ? KeepRightMargin : ResponseRate}
    </nav>
  );
}
