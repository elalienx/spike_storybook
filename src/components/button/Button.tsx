// Project  files
import "./button.css";
import "./button-primary.css";

interface Props {
  /** Button contents */
  label: string;

  /** Is this the principal call to action on the page? */
  primary: boolean;

  /** Button decorative icon */
  icon?: string;

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
      ({icon}) - {label}
    </button>
  );
}
