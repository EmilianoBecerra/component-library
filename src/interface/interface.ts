export type TreeNode = {
    node_id: number
    graph_id: number
    source_id: string
    name: string
    metadata?: {
        image_url?: string
        [key: string]: unknown
    }
    children?: TreeNode[]
    parent_ids?: number[]
}