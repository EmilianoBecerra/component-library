import type { Meta, StoryObj } from "@storybook/react-vite";
import ToolBarSource from "@/components/ToolBar?raw";
import { ToolBar } from "@/components/ToolBar";




const meta = {
    title: "Example/TaxonomyTree/ToolBar",
    component: ToolBar,
    parameters: {
        docs: {
            source: {
                code: ToolBarSource,
                language: "tsx",
                type: "code"
            }
        }
    }
} satisfies Meta<typeof ToolBar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ToolBarExample: Story = {
    args: {
        expand: true,
        setExpand: () => {},
        setValue: () => {},
    }
}