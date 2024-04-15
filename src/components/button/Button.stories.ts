// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Primary: Story = {
  args: {
    icon: "plus",
    primary: true,
    label: "Click me",
  },
};

export const PrimaryBig: Story = {
  args: {
    icon: "plus",
    primary: true,
    label: "Click me",
    size: "big",
  },
};

export const Secondary: Story = {
  args: {
    icon: "plus",
    primary: false,
    label: "Click me",
  },
};

export const SecondaryBig: Story = {
  args: {
    icon: "plus",
    primary: false,
    label: "Click me",
    size: "big",
  },
};
