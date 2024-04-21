/**
 * About:
 * This Story is a .tsx instead of .ts file, because I need to return JSX to wrap the RowCandidate around a HTML table.
 */
// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import RowCandidate from "./RowCandidate";

const meta: Meta<typeof RowCandidate> = {
  title: "Tables/Row Candidate",
  component: RowCandidate,
  parameters: { layout: "fullscreen" },
  argTypes: {
    id: { control: { type: "number", min: 1 } },
    projectId: { control: { disable: true } },
    date_created: { control: { disable: true } },
    linked_in_url: { control: { disable: true } },
    candidate_image_url: { control: { type: "file", accept: ".jpg, .png" } },
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
    relevance: { control: { type: "range", min: 0, max: 5 } },
    contact_status: { control: { type: "range", min: 0, max: 5 } },
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Education Lead",
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
    notes: "Highly qualified, but a bit egocentric...",
    relevance: 5,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    projectId: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
};

export const Empty: Story = {
  args: {
    id: 2,
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
    notes: "",
    relevance: 0,
    contact_status: 0,
    contact_date: "",
    projectId: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "",
  },
};
