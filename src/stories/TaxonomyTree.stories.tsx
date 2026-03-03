import type { Meta, StoryObj } from "@storybook/react-vite";
import TaxonomyTreeSource from "@/components/TaxonomyTree?raw";
import { TaxonomyTree } from "@/components/TaxonomyTree";
import { buildTree } from "@/utils/buildTree";
import dbData from '@/utils/db.json';

const treeData = buildTree(dbData);



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
  args: {
    isLoading: false,
    expand: true,
    value: "",
    tree: treeData,
    setNode: () => { }
  }
}
