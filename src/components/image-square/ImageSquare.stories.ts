// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
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
    src: ImageURLs.candidate_eduardo,
    profile: "candidate",
  },
};

export const CompanyDefault: Story = {
  args: {
    src: ImageURLs.company_foklsam,
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
