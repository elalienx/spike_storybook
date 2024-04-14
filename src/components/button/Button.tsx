// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-solid-svg-icons";

// Project  files
import "./button.css";
import "./button-primary.css";

interface Props {
  /** Button contents */
  label: string;

  /** Is this the principal call to action on the page? */
  primary: boolean;

  /** The icon name from the FontAwesome library */
  icon?: IconName;

  /** How large should the button be? */
  size?: "small" | "big";

  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export default function Button({
  label = "Button label",
  primary,
  icon = "plus",
  size = "small",
  ...props
}: Props) {
  const classNamePrimary = primary ? "primary" : "";

  return (
    <button className={`button ${size} ${classNamePrimary}`} {...props}>
      <FontAwesomeIcon className="icon" icon={["fas", icon]} />
      {label}
    </button>
  );
}
