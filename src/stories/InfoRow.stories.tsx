import { InfoRow } from "@/components/InfoRow";
import InfoRowSource from "@/components/InfoRow?raw";
import type { Meta, StoryObj } from "@storybook/react-vite"


const meta = {
  title: "Example/TaxonomyTree/SideBar/InfoRow",
  component: InfoRow,
  parameters: {
    docs: {
      source: {
        code: InfoRowSource,
        language: "tsx",
        type: "code"
      }
    }
  }
} satisfies Meta<typeof InfoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoRowCode: Story = {
  args: {
    label: "node_id",
    data: "2",
    isImg: true
  }
}