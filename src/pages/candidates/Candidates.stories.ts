// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Candidates from "./Candidates";

const meta = {
  title: "Pages/Candidates",
  component: Candidates,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Candidates>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Empty: Story = {
  args: {},
};

export const Loading: Story = {
  args: {},
};

export const Content: Story = {
  args: {},
};

export const Error: Story = {
  args: {},
};
