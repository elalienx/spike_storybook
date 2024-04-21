// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageSquare from "./ImageSquare";

const meta = {
  title: "Components/Image Square",
  component: ImageSquare,
  parameters: { layout: "centered" },
  args: { profile: "company" },
  argTypes: { src: { control: { type: "file", accept: ".jpg, .png" } } },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageSquare>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const CandidateDefault: Story = {
  args: {
    src: "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
    profile: "candidate",
  },
};

export const CompanyDefault: Story = {
  args: {
    src: "https://media.licdn.com/dms/image/C4D0BAQH3hv1qu8sCrQ/company-logo_200_200/0/1667899788739/folksam_logo?e=1721260800&v=beta&t=-TSMOF4J0uygrJpyHNGmvPFUmSPaDEuj0Q_5jAkPPOk",
  },
};

export const CandidateEmpty: Story = {
  args: {
    src: "",
    profile: "candidate",
  },
};

export const CompanyEmpty: Story = {
  args: {
    src: "",
  },
};
