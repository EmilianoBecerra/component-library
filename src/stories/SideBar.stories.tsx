import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideBar } from "@/components/SideBar";
import SideBarSource from "@/components/SideBar.tsx?raw";

const meta = {
  title: "Example/TaxonomyTree/SideBar",
  component: SideBar,
  parameters: {
    docs: {
      source: {
        code: SideBarSource,
        language: "tsx",
        type: "code"
      }
    }
  }
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBarCode: Story = {
  args: {
    node: {
      node_id: "1",
      graph_id: 100,
      source_id: "root-001",
      name: "Infraestructura Global",
      metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", primary: "apple" },
      parent_ids: [],
    }
  }
}