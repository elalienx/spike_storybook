// Project files
import Color from "../../../types/Color";

// Properties
// prettier-ignore
const colorsContact: Color[] = ["gray", "green", "cyan", "blue", "red", "gray"];
// prettier-ignore
const colorsRelevance: Color[] = ["gray", "red", "orange", "yellow", "green", "blue",];
// prettier-ignore
const labelsContact = ["unlabeled", "interviewed", "scheduled", "talking", "declined", "contacted"];
// prettier-ignore
const labelsReleance = ["unlabeled", "not relevant", "junior", "maybe", "yes", "super yes"];

const data = {
  relevance: {
    colors: colorsRelevance,
    labels: labelsReleance,
  },
  contact: {
    colors: colorsContact,
    labels: labelsContact,
  },
};

export default data;
