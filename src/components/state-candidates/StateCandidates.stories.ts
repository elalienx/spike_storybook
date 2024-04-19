// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import StateCandidates from "./StateCandidates";
import ImageStateError from "../../assets/state-error.png";
import ImageStateEmtpyCandidates from "../../assets/state-empty-candidates.png";

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
    image_url: ImageStateEmtpyCandidates,
    image_alt: "A male a female construction engineers checking a blueprint",
    messages: [
      "Welcome to the COMPANY_NAME ASSIGNMENT_NAME project",
      "Click below to start adding candidates.",
    ],
    button_label: "Add Candidates",
    button_icon: "plus",
  },
};

export const Error: Story = {
  args: {
    image_url: ImageStateError,
    image_alt: "A woman holding his hands behind the head looking surprised",
    messages: [
      "The office WIFI strikes again!",
      "You know the drill. Call Martin and try again.",
    ],
    button_label: "Try again",
    button_icon: "rotate-right",
  },
};
