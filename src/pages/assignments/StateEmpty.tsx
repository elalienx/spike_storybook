// Project files
import "../../assets/state-empty-assignments.png";

export default function StateEmpry() {
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
