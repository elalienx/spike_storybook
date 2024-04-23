// Project files
import Image from "assets/state-empty-candidates.png";
import Button from "components/button/Button";
import "./state-candidates.css";

export default function StateEmpty() {
  return (
    <div className="state-candidates">
      <img
        src={Image}
        alt="A male a female construction engineers checking a blueprint"
      />
      <div className="content">
        <p>Welcome to a new Scoutr assignment.</p>
        <p>Click below to start adding candidates.</p>
        <Button label="New assignment" icon="plus" primary={true} />
      </div>
    </div>
  );
}
