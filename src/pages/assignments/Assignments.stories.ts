// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Assignments from "./Assignments";

const meta = {
  title: "Pages/Assignments",
  component: Assignments,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Assignments>;

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
