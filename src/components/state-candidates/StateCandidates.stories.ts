// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import StateCandidates from "./StateCandidates";
import Data from "../../data/page-states.json";
import { IconName } from "@fortawesome/fontawesome-svg-core";

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
    image_url: Data.candidates.empty.image_url,
    image_alt: Data.candidates.empty.image_alt,
    messages: Data.candidates.empty.messages,
    button_label: Data.candidates.empty.button_label,
    button_icon: Data.candidates.empty.button_icon as IconName,
  },
};

export const Error: Story = {
  args: {
    image_url: Data.candidates.error.image_url,
    image_alt: Data.candidates.error.image_alt,
    messages: Data.candidates.error.messages,
    button_label: Data.candidates.error.button_label,
    button_icon: Data.candidates.error.button_icon as IconName,
  },
};
