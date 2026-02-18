import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChildrenLevel } from "./ChildrenLevel.tsx";
import ChildrenLevelSource from "./ChildrenLevel.tsx?raw";



const meta = {
    title: "Example/TaxonomyTree/ChildrenLevel",
    component: ChildrenLevel,
    parameters: {
        docs: {
            source: {
                code: ChildrenLevelSource,
                language: "tsx",
                type: "code"
            }
        }
    }
} satisfies Meta<typeof ChildrenLevel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ChildrenLevelCode: Story = {
    args: {
        childrens: {
            node_id: 2,
            graph_id: 2,
            source_id: "222",
            name: "Food & Beverages",
            children: [
                {
                    node_id: 3,
                    graph_id: 3,
                    source_id: "321",
                    name: "Fresh Produce",
                    children: [
                        {
                            node_id: 182309182039128,
                            graph_id: 182309182039128,
                            source_id: "dsalkhaslkdjhasdlk",
                            name: "Fruits",
                            metadata: { key: "123", image_url: "https://cdn-icons-png.flaticon.com/128/3137/3137044.png" }
                        },
                        {
                            node_id: 9182409182999,
                            graph_id: 9182409182999,
                            source_id: "99128310298318391jkasjdj",
                            name: "Vegetables",
                            metadata: { key: "123", image_url: "https://cdn-icons-png.flaticon.com/128/3137/3137044.png" }
                        }
                    ]
                },
                {
                    node_id: 4,
                    graph_id: 4,
                    source_id: "333",
                    name: "Dairy",
                    children: [
                        {
                            node_id: 1782390712,
                            graph_id: 1782390712,
                            source_id: "nlkkkasdj9qwe9",
                            name: "Milk",
                        },
                        {
                            node_id: 9099182391283,
                            graph_id: 9099182391283,
                            source_id: "asdasdffffasdasd",
                            name: "Cheese",
                        },
                    ]
                }
            ]
        },
        depth: 1
    }
}