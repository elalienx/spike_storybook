// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import CardNew from "./CardNew";

const meta = {
  title: "Components/Card new",
  component: CardNew,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNew>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Default: Story = {
  args: {},
};
