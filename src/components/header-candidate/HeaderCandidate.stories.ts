// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import HeaderCandidate from "./HeaderCandidate";

const meta = {
  title: "Components/Header Candidate",
  component: HeaderCandidate,
  parameters: { layout: "centered" },
  argTypes: {
    candidate_image_url: {
      control: { type: "file", accept: ".jpg, .png, .webp" },
    },
    company_image_url: {
      control: { type: "file", accept: ".jpg, .png, .webp" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Empty: Story = {
  args: {
    id: 1,
    candidate_image_url: "",
    company_image_url: "",
  },
};

export const OnlyProfile: Story = {
  args: {
    id: 2,
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    company_image_url: "",
  },
};

export const OnlyLogo: Story = {
  args: {
    id: 3,
    candidate_image_url: "",
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
  },
};

export const Complete: Story = {
  args: {
    id: 4,
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
  },
};
