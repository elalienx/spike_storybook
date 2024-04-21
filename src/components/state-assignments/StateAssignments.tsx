// Project files
import Button from "../button/Button";
import PageState from "../../types/PageState";
import "./state-assignments.css";

export default function StateAssignments(item: PageState) {
  const { image_url, image_alt, messages, button_label, button_icon } = item;

  // Components
  const Messages = messages.map((item, index) => <p key={index}>{item}</p>);

  return (
    <div className="state-assignments">
      <img src={image_url} alt={image_alt} />
      <div className="content">
        {Messages}
        <Button label={button_label} icon={button_icon} primary={true} />
      </div>
    </div>
  );
}
