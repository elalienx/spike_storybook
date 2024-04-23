// Project files
import Color from "types/Color";
import "./badge.css";
import "./colors.css";

interface Props {
  /** What color to use. */
  color: Color;

  /**  Badge contents. */
  value: number;
}

/** Indicates progress or status in a sequence. */
export default function Badge({ color, value }: Props) {
  return <div className={`badge ${color}`}>{value}</div>;
}
