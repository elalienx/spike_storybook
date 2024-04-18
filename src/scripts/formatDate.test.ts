// Node modules
import { expect, test } from "vitest";

// Project files
import formatDate from "./formatDate";

// tutorial: https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
// reject invalid date (example you pass 2024-31-04 because the middle spot is for month)
// convert formatDate 2024-04-02 21:00:30.610279 into APR 2
