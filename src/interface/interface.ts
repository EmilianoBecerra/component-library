export type TreeNode = {
  node_id: string
  graph_id: number
  source_id: string
  name: string
  metadata?: {
    image_url?: string,
    /* [key: string]: unknown, */
    primary: string
  }
  children?: TreeNode[]
  parent_ids?: string[]
}

export type Node = {
  node_id: string | undefined
  name: string | undefined
}
