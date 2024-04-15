// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  argTypes: {
    date_created: { control: "date" },
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Default: Story = {
  args: {
    id: 1,
    date_created: "2024-04-15",
    assignment_name: "Data Engineer",
    company_name: "Folksam",
    company_image_url: "",
  },
};
