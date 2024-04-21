// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ItemCandidate from "./ItemCandidate";

const meta = {
  title: "Components/Item Candidate",
  component: ItemCandidate,
  parameters: { layout: "centered" },
  argTypes: {
    candidate_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Frontend Developer",
  },
};

export const JobTitleTrimmed: Story = {
  args: {
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Senior Frontend Developer",
  },
};

export const Empty: Story = {
  args: {
    candidate_image_url: "",
    candidate_name: "George Domingez",
    candidate_job_title: "UX Lead",
  },
};
