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
export const Empty: Story = {
  args: {
    label: "Name",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    initialValue: "",
  },
};

export const WithText: Story = {
  args: {
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    initialValue:
      "https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/",
  },
};
