// Node modules
import { useRef } from "react";

// Project files
import "./input-ref.css";

interface Props {
  /** The name of this field */
  label: string;

  /** The example text to display when the field is empty */
  placeholder: string;

  /** Determines if is an obligatory field */
  required: boolean;

  /** The text the user writes in the field */
  defaultValue: string;
}

/** Input control to allow a single line of text. */
export default function InputTextRef(item: Props) {
  const { label, placeholder, required, defaultValue } = item;

  // Local state
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label className="input">
      <span className="label">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        ref={inputRef}
        defaultValue={defaultValue}
      />
    </label>
  );
}
