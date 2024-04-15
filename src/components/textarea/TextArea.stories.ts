// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import TextArea from "./TextArea";

const meta = {
  title: "Form controls/Text area",
  component: TextArea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    value: "",
  },
};
