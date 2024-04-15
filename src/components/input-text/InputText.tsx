// Project files
import "./input.css";

interface Props {
  /** The name of this field */
  label: string;

  /** The example text to display when the field is empty */
  placeholder: string;

  /** Determines if is an obligatory field */
  required: boolean;

  /** The text the user writes in the field */
  value?: string;
}

/** Input control to allow a single line of text */
export default function InputText({
  label,
  placeholder,
  required,
  value,
}: Props) {
  return (
    <label className="input">
      <span className="label">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </label>
  );
}
