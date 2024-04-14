// Project files
import "./badge.css";

interface iProps {
  /** What color to use */
  color: string;

  /**  Badge contents */
  value: string;
}

export default function Badge({ color, value }: iProps) {
  return <div className={`badge ${color}`}>{value}</div>;
}
