// Project files
import Color from "../../types/Color";
import Badge from "../badge/Badge";
import "./item-badge.css";

interface Props {
  /** What color to use for the Badge */
  color: Color;

  /**  Badge contents */
  value: number;

  /** The first line of text */
  title: string;

  /** The second line of text. This one is optional */
  subtitle?: string;
}

/** Indicates progress or status in a sequence. */
export default function ItemBadge(item: Props) {
  const { value, color, title, subtitle } = item;

  return (
    <div className="item-badge">
      <Badge color={color} value={value} />
      <div className="content">
        <small>{title}</small>
        {subtitle && <small className="label">{subtitle}</small>}
      </div>
    </div>
  );
}
