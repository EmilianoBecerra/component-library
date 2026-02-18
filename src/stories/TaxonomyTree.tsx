/* import type { TreeNode } from '@/interface/interface.ts' */
import '@/globals.css'
import { ChildrenLevel } from '@/components/ChildrenLevel.tsx'
import { Skeleton } from '@/components/ui/skeleton';


export function TaxonomyTree({ isLoading }: { isLoading: boolean }) {
    const treeData = [
        {
            node_id: 1,
            graph_id: 100,
            source_id: "root-001",
            name: "Infraestructura Global",
            metadata: { image_url: "https://api.icon/cloud.png", region: "AWS" },
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
                            metadata: { port: 5432, status: "active" },
                            parent_ids: [2],
                            children: [
                                {
                                    node_id: 10, // <--- ESTE NODO TIENE DOS PADRES (4 y 5)
                                    graph_id: 100,
                                    source_id: "sync-001",
                                    name: "Servicio de Backup Híbrido",
                                    metadata: { type: "Cross-platform" },
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
                                            metadata: { provider: "Google" },
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
        }
    ];
    return (
        <div className='min-h-1 m-5 w-12/12 --font-font-mono --color-primary grid '>
            {isLoading ?
                <div>
                    <Skeleton className="h-5 w-25 mb-2" />
                    <Skeleton className="h-5 w-25 mb-2 ml-5" />
                    <Skeleton className="h-5 w-25 mb-2 ml-10" />
                    <Skeleton className="h-5 w-25 mb-2 ml-15" />
                    <Skeleton className="h-5 w-25 mb-2 ml-5" />
                    <Skeleton className="h-5 w-25 mb-2 ml-10" />
                    <Skeleton className="h-5 w-25 mb-2 ml-15" />
                    <Skeleton className="h-5 w-25 mb-2 ml-20" />
                </div>
                :
                treeData.map(branch => <ChildrenLevel treeNode={branch} depth={0} key={branch.node_id} />)
            }
        </div >
    )
}

