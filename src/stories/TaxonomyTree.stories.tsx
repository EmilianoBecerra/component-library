import type { Meta, StoryObj } from "@storybook/react-vite";
import TaxonomyTreeSource from "./TaxonomyTree.tsx?raw";
import { TaxonomyTree } from "./TaxonomyTree";



const meta = {
    title: "Example/TaxonomyTree",
    component: TaxonomyTree,
    parameters: {
        docs: {
            source: {
                code: TaxonomyTreeSource,
                language: "tsx",
                type: "code"
            }
        }
    }
} satisfies Meta<typeof TaxonomyTree>;

export default meta;
type Story = StoryObj<typeof meta>;


export const TaxonomyTreeCode: Story = {

}