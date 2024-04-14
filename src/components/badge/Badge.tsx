// Project files
import "./badge.css";

interface iProps {
  /** What color to use */
  color:
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "cyan"
    | "blue"
    | "purple";

  /**  Badge contents */
  value: number;
}

/** Indicates progress or status in a sequence. */
export default function Badge({ color = "gray", value = 0 }: iProps) {
  return <div className={`badge ${color}`}>{value}</div>;
}
