// Project files
import Logo from "assets/logo-scoutr.svg";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import ResponseRate from "./helpers/ResponseRate";
import "./helpers/assignment.css";
import "./helpers/response-rate.css";
import "./navigation-bar.css";

interface Props {
  /** The name of the current assignment. */
  assignment_name: string;

  /** The company logo. */
  company_image_url: string;

  /** How many candidates have responded to us after initial contact? A value of -1 indicates we haven't started to contact anyone yet. */
  response_rate: number;
}

/** The menu bar for the Candidate page. */
export default function NavigationBar(item: Props) {
  const { assignment_name, company_image_url, response_rate } = item;

  // Propertie
  const alt = "Logo of the company giving the assigment";

  return (
    <nav className="navigation-bar">
      {/* Left */}
      <div className="assignment">
        <ImageThumbnail className="logo" src={company_image_url} alt={alt} />
        <h1 className="title">{assignment_name}</h1>
      </div>

      {/* Midle */}
      <img className="scoutr-logo" src={Logo} />

      {/* Right */}
      <ResponseRate response_rate={response_rate} />
    </nav>
  );
}
