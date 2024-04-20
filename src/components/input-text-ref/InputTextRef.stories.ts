// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import InputTextRef from "./InputTextRef";

const meta = {
  title: "Form controls/Input text (ref)",
  component: InputTextRef,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof InputTextRef>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Empty: Story = {
  args: {
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    defaultValue: "",
  },
};

export const WithText: Story = {
  args: {
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    defaultValue: "Cecilia Nowak",
  },
};
