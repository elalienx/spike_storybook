// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ItemCompany from "./ItemCompany";

const meta = {
  title: "Components/Item Company",
  component: ItemCompany,
  parameters: { layout: "centered" },
  argTypes: {
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
    company_name: "Novare",
    company_duration_in_months: 72,
  },
};

export const ShortJobDuration: Story = {
  args: {
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
    company_name: "Novare",
    company_duration_in_months: 3,
  },
};

export const Empty: Story = {
  args: {
    company_image_url: "",
    company_name: "Novare",
    company_duration_in_months: 12,
  },
};
