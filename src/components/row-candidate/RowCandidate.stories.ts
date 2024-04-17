// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import RowCandidate from "./RowCandidate";

const meta = {
  title: "Components/Row Candidate",
  component: RowCandidate,
  parameters: { layout: "fullscreen" },
  argTypes: {
    date_created: {
      control: {
        disable: true,
      },
    },
    linked_in_url: {
      control: {
        disable: true,
      },
    },
    projectId: {
      control: {
        disable: true,
      },
    },
    candidate_image_url: {
      control: { type: "file", accept: ".jpg, .png, .webp" },
    },
    company_image_url: {
      control: { type: "file", accept: ".jpg, .png, .webp" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RowCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Default: Story = {
  args: {
    id: 1,
    projectId: 1,
    date_created: "2024-01-31",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Education Lead",
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
    notes: "Highly qualified, but a bit egocentric...",
    relevance: 4,
    contact_status: 6,
    contact_date: "bar",
  },
};
