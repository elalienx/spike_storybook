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

/** Input control to allow a single line of text. */
export default function InputText(item: Props) {
  const { label, placeholder, required, initialValue } = item;

  // Local state
  const [value, setValue] = useState(initialValue);

  return (
    <label className="input">
      <span className="label">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  );
}
