import '@/globals.css'
import type { TreeNode } from '@/interface/interface';
import { Skeleton } from '@/components/ui/skeleton';
import { ChildrenLevel } from './ChildrenLevel';

export function TaxonomyTree({ isLoading, expand, value, tree, setNode }: { isLoading: boolean, expand: boolean, value: string, tree: TreeNode[], setNode: (node: TreeNode) => void }) {
  return (
    <div className='min-h-1 m-5 w-12/12 --font-font-mono --color-primary grid'>
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
        tree.map(branch =>
          <ChildrenLevel
            treeNode={branch}
            depth={0}
            key={branch.node_id}
            expand={expand}
            value={value}
            setNode={setNode}
          />
        )
      }
    </div>
  )
}
