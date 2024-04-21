// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  argTypes: {
    date_created: { control: { disable: true } },
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    date_created: "2024-04-15",
    assignment_name: "Data Engineer",
    company_name: "Folksam",
    company_image_url:
      "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
  },
};

export const Empty: Story = {
  args: {
    id: 1,
    date_created: "2024-04-15",
    assignment_name: "Data Engineer",
    company_name: "Folksam",
    company_image_url: "",
  },
};
