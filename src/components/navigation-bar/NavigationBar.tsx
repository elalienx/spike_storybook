// Project files
import Logo from "../../assets/logo-scoutr.svg";
import Placeholder from "../../assets/placeholder-company.png";
import "./navigation-bar.css";

interface Props {
  assignment_name: string;
  company_image_url: string;
  response_rate?: number;
}

export default function NavigationBar({
  assignment_name,
  company_image_url,
  response_rate = -1,
}: Props) {
  // Properties
  const Image = company_image_url === "" ? Placeholder : company_image_url;

  // Components
  const ResponseRate = (
    <div className="right response-rate">
      <span className="value">{response_rate}</span>
      <span className="symbol">%</span>
      <small className="label">Response rate</small>
    </div>
  );
  const KeepRightMargin = <div className="right div-to-keep-margin" />;

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
      {response_rate >= 0 ? ResponseRate : KeepRightMargin}
    </nav>
  );
}
