// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import StateCandidates from "./StateCandidates";
import ImageStateError from "../../assets/state-error.png";
import ImageStateAssignmentsEmpty from "../../assets/state-assignments-empty.png";

const meta = {
  title: "States/Candidates",
  component: StateCandidates,
  parameters: { layout: "centered" },
  argTypes: { image_url: { control: { type: "file", accept: ".jpg, .png" } } },
  tags: ["autodocs"],
} satisfies Meta<typeof StateCandidates>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Empty: Story = {
  args: {
    image_url: ImageStateAssignmentsEmpty,
    image_alt: "A male a female construction engineers checking a blueprint",
    messages: [
      "Seems like you haven’t created any assigments yet.",
      "Click the button below to start!",
    ],
    button_label: "New assigment",
    button_icon: "plus",
  },
};

export const Error: Story = {
  args: {
    image_url: ImageStateError,
    image_alt: "A woman holding his hands behind the head looking surprised",
    messages: [
      "Oh no! We could not load any assigment.",
      "Call Martin to fix your WIFI and try again!",
    ],
    button_label: "Try again",
    button_icon: "rotate-right",
  },
};
