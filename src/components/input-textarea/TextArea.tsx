// Node modules
import { useState } from "react";

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
  initialValue?: string;
}

/** Input control to allow multiple lines of text. */
export default function InputText({
  label,
  placeholder,
  required,
  initialValue,
}: Props) {
  // Local state
  const [value, setValue] = useState(initialValue);

  return (
    <label className="input">
      <span className="label">{label}</span>
      <textarea
        rows={10}
        placeholder={placeholder}
        required={required}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></textarea>
    </label>
  );
}
