import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Press me",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "press me",
  },
};
