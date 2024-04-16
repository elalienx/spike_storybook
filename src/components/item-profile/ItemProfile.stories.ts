// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ItemProfile from "./ItemProfile";

const meta = {
  title: "Components/Item Profile",
  component: ItemProfile,
  parameters: { layout: "centered" },
  argTypes: {
    image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const CandidateWithNoImage: Story = {
  args: {
    image_url: "",
    isCandidate: true,
    title: "George Domingez",
    subtitle: "Data Engineer",
  },
};

export const CandidateWithImage: Story = {
  args: {
    image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    isCandidate: true,
    title: "Eduardo Alvarez",
    subtitle: "Tech Lead",
  },
};

export const CompanyWithNoLogo: Story = {
  args: {
    image_url: "",
    title: "Thoughworks",
    isCandidate: false,
    subtitle: "5Y 1M",
  },
};

export const CompanyWithLogo: Story = {
  args: {
    image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
    title: "Novare Potential",
    isCandidate: false,
    subtitle: "2Y 9M",
  },
};
