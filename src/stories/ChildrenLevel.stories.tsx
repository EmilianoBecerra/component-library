import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChildrenLevel } from "@/components/ChildrenLevel";
import ChildrenLevelSource from "@/components/ChildrenLevel.tsx?raw";



const meta = {
    title: "Example/TaxonomyTree/ChildrenLevel",
    component: ChildrenLevel,
    parameters: {
        docs: {
            source: {
                code: ChildrenLevelSource,
                language: "tsx",
                type: "code"
            },
        }
    }
} satisfies Meta<typeof ChildrenLevel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ChildrenLevelCode: Story = {
    args: {
        treeNode: {
            node_id: 1,
            graph_id: 100,
            source_id: "root-001",
            name: "Infraestructura Global",
            metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },
            parent_ids: [],
            children: [
                {
                    node_id: 2,
                    graph_id: 100,
                    source_id: "dep-001",
                    name: "Capa de Datos",
                    parent_ids: [1],
                    children: [
                        {
                            node_id: 4,
                            graph_id: 100,
                            source_id: "db-001",
                            name: "PostgreSQL Master",
                            metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },
                            parent_ids: [2],
                            children: [
                                {
                                    node_id: 10,
                                    graph_id: 100,
                                    source_id: "sync-001",
                                    name: "Servicio de Backup Híbrido",
                                    metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },
                                    parent_ids: [4, 5],
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    node_id: 3,
                    graph_id: 100,
                    source_id: "dep-002",
                    name: "Capa de Aplicación",
                    parent_ids: [1],
                    children: [
                        {
                            node_id: 5,
                            graph_id: 100,
                            source_id: "srv-001",
                            name: "API Gateway",
                            metadata: { auth: "JWT" },
                            parent_ids: [3],
                            children: [
                                {
                                    node_id: 10,
                                    graph_id: 100,
                                    source_id: "sync-001",
                                    name: "Servicio de Backup Híbrido",
                                    metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "minion" },
                                    parent_ids: [4, 5],
                                    children: []
                                },
                                {
                                    node_id: 6,
                                    graph_id: 100,
                                    source_id: "srv-002",
                                    name: "Microservicio Auth",
                                    parent_ids: [5],
                                    children: [
                                        {
                                            node_id: 7,
                                            graph_id: 100,
                                            source_id: "sub-srv-001",
                                            name: "Módulo 2FA (Deep Child)",
                                            metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },
                                            parent_ids: [6],
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        depth: 0
    }
}