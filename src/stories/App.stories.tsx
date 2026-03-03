import type { Meta, StoryObj } from "@storybook/react-vite";
import App from "@/App";
import AppCodeSource from "@/App?raw";

const meta = {
 title: "Example",
 component: App,
 parameters: {
  docs: {
   source: {
    code: AppCodeSource,
    language: "tsx",
    type: "code"
   }
  }
 }
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrincipalAppExample: Story = {
}