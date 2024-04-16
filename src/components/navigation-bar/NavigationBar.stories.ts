// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import NavigationBar from "./NavigationBar";

const meta = {
  title: "Components/Navigation Bar",
  component: NavigationBar,
  parameters: { layout: "fullscreen" },
  argTypes: {
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (variants)
export const Default: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url: "",
    response_rate: -1,
  },
};
export const WithNoContacted: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url:
      "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
    response_rate: -1,
  },
};

export const ContactedButNoResponse: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url:
      "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
    response_rate: 0,
  },
};

export const ContactedWithResponse: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url:
      "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
    response_rate: 37,
  },
};
