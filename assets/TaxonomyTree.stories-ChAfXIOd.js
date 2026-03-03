import{T as r}from"./TaxonomyTree-C-MCPjf9.js";import"./jsx-runtime-u17CrQMm.js";import"./index-CUPX-_mX.js";import"./iframe-TnTOlIVT.js";import"./preload-helper-B_lI8Z-o.js";import"./ChildrenLevel-aEeO4MG8.js";import"./index-CYBO4cka.js";import"./index-Bsy2Gl-X.js";const o=`import '@/globals.css'\r
import type { TreeNode } from '@/interface/interface';\r
import { Skeleton } from '@/components/ui/skeleton';\r
import { ChildrenLevel } from './ChildrenLevel';\r
\r
export function TaxonomyTree({ isLoading, expand, value, tree, setNode }: { isLoading: boolean, expand: boolean, value: string, tree: TreeNode[], setNode: (node: TreeNode) => void }) {\r
  return (\r
    <div className='min-h-1 m-5 w-12/12 --font-font-mono --color-primary grid'>\r
      {isLoading ?\r
        <div>\r
          <Skeleton className="h-5 w-25 mb-2" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-5" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-10" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-15" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-5" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-10" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-15" />\r
          <Skeleton className="h-5 w-25 mb-2 ml-20" />\r
        </div>\r
        :\r
        tree.map(branch =>\r
          <ChildrenLevel\r
            treeNode={branch}\r
            depth={0}\r
            key={branch.node_id}\r
            expand={expand}\r
            value={value}\r
            setNode={setNode}\r
          />\r
        )\r
      }\r
    </div>\r
  )\r
}\r
`,c={title:"Example/TaxonomyTree",component:r,parameters:{docs:{source:{code:o,language:"tsx",type:"code"}}}},e={args:{isLoading:!1,expand:!0,value:""}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    expand: true,
    value: ""
  }
}`,...e.parameters?.docs?.source}}};const p=["TaxonomyTreeCode"];export{e as TaxonomyTreeCode,p as __namedExportsOrder,c as default};
