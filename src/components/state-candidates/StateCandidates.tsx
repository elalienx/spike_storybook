// Nodem modules
import { IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import Button from "../button/Button";
import "./state-assignment.css";

interface Props {
  /** The URL of the image to illustrate the state */
  image_url: string;

  /** The image alt description for screen readers */
  image_alt: string;

  /** An array containing the paragrapgs describing the state */
  messages: string[];

  /** The label of the action available to the state */
  button_label: string;

  /** The icon for button */
  button_icon: IconName;
}

export default function StateAssignment(item: Props) {
  const { image_url, image_alt, messages, button_label, button_icon } = item;

  // Components
  const Messages = messages.map((item) => <p>{item}</p>);

  return (
    <div className="state-assignment">
      <img src={image_url} alt={image_alt} />
      <div className="content">
        {Messages}
        <Button label={button_label} icon={button_icon} primary={true} />
      </div>
    </div>
  );
}
