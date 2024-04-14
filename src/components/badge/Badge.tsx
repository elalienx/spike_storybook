// Project files
import Color from "../../types/Color";
import "./badge.css";

interface Props {
  /** What color to use */
  color: Color;

  /**  Badge contents */
  value: number;
}

/** Indicates progress or status in a sequence. */
export default function Badge({ color = "gray", value = 0 }: Props) {
  return <div className={`badge ${color}`}>{value}</div>;
}
