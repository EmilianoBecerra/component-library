import type { TreeNode } from "@/interface/interface";


export function flattenTree (nodes: TreeNode[]): TreeNode[] {
  return nodes.flatMap(node => [
    node,
    ...flattenTree(node.children ?? [])
  ])
}