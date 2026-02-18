import type { TreeNode } from '@/interface/interface.ts'
import '@/globals.css'
import { ChildrenLevel } from '@/components/ChildrenLevel.tsx'


export function TaxonomyTree() {
    const fetchhh: TreeNode[] = [
        {
            node_id: 1,
            graph_id: 1,
            source_id: "123",
            name: "$Root$",
            children: [
                {
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
                {
                    node_id: 102,
                    graph_id: 102,
                    source_id: "222",
                    name: "Household",
                    children: [
                        {
                            node_id: 33123123,
                            graph_id: 33123123,
                            source_id: "asdjaskdjaksd",
                            name: "none",
                            children: [
                                {
                                    node_id: 9998989899998,
                                    graph_id: 9998989899998,
                                    source_id: "lllllkasodl",
                                    name: "Cleaning Supplies",
                                },
                                {
                                    node_id: 9900090898,
                                    graph_id: 9900090898,
                                    source_id: "nnnnnnjaklsdjhnaskdj",
                                    name: "Paper Product",
                                }
                            ]
                        }
                    ],
                }
            ]
        }
    ]

    return (
        <div className='flex flex-col justify-center min-h-1 m-5'>
            {fetchhh.map((branch: TreeNode) => (
                <ChildrenLevel treeNode={branch} depth={0} key={branch.node_id} />
            ))}
        </div>
    )
}

