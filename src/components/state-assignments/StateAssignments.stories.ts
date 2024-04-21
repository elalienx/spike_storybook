// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import StateAssignments from "./StateAssignments";
import Data from "../../data/page-states.json";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const meta = {
  title: "States/Assignments",
  component: StateAssignments,
  parameters: { layout: "centered" },
  argTypes: { image_url: { control: { type: "file", accept: ".jpg, .png" } } },
  tags: ["autodocs"],
} satisfies Meta<typeof StateAssignments>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Empty: Story = {
  args: {
    image_url: Data.assignments.empty.image_url,
    image_alt: Data.assignments.empty.image_alt,
    messages: Data.assignments.empty.messages,
    button_label: Data.assignments.empty.button_label,
    button_icon: Data.assignments.empty.button_icon as IconName,
  },
};

export const Error: Story = {
  args: {
    image_url: Data.assignments.error.image_url,
    image_alt: Data.assignments.error.image_alt,
    messages: Data.assignments.error.messages,
    button_label: Data.assignments.error.button_label,
    button_icon: Data.assignments.error.button_icon as IconName,
  },
};
