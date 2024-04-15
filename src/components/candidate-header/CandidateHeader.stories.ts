// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import CandidateHeader from "./CandidateHeader";

const meta = {
  title: "Components/Candidate header",
  component: CandidateHeader,
  parameters: { layout: "centered" },
  argTypes: {
    candidate: { control: { type: "file", accept: ".jpg, .png" } },
    company: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CandidateHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Empty: Story = {
  args: {
    candidate: "",
    company: "",
  },
};

export const OnlyProfile: Story = {
  args: {
    candidate:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    company: "",
  },
};

export const OnlyLogo: Story = {
  args: {
    candidate: "",
    company:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
  },
};

export const Complete: Story = {
  args: {
    candidate:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    company:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
  },
};
