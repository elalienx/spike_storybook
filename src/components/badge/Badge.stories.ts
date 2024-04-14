// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Badge from "./Badge";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Red: Story = {
  args: {
    color: "red",
    value: "1",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    value: "2",
  },
};
