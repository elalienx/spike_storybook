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
    primary: true,
    label: "Button",
  },
};

export const PrimaryBig: Story = {
  args: {
    primary: true,
    label: "Button",
    size: "big",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
};

export const SecondaryBig: Story = {
  args: {
    primary: false,
    label: "Button",
    size: "big",
  },
};
