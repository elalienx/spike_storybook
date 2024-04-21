// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Assignments from "./Assignments";

const meta = {
  title: "Pages/Assignments",
  component: Assignments,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Assignments>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        date_created: "2024-01-31 21:00:30.610279",
        assignment_name: "Data Engineer",
        company_name: "Folksam",
        company_image_url:
          "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
      },
      {
        id: 2,
        date_created: "2024-02-01 21:00:30.610279",
        assignment_name: "Developer Architect",
        company_name: "Folksam",
        company_image_url:
          "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
      },
      {
        id: 3,
        date_created: "2024-02-02 21:00:30.610279",
        assignment_name: "Master Data Specialist",
        company_name: "McDonalds",
        company_image_url:
          "https://media.licdn.com/dms/image/D4D0BAQGfgcezfGLrFQ/company-logo_200_200/0/1711617124309/bsbholding_logo?e=1721865600&v=beta&t=tl1GywtivuaYUS1f88XwEV6AWYW1sL5DygHoXibcxwY",
      },
    ],
    status: "content",
  },
};

export const Loading: Story = {
  args: {
    data: [],
    status: "loading",
  },
};

export const Error: Story = {
  args: {
    data: [],
    status: "error",
  },
};

export const Empty: Story = {
  args: {
    data: [],
    status: "empty",
  },
};
