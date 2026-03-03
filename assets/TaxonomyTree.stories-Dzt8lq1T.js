import{T as r,b as o,d as a}from"./db-B3lqZL-g.js";import"./jsx-runtime-u17CrQMm.js";import"./index-B9oVnICJ.js";import"./iframe-DOE9zQDk.js";import"./preload-helper-B_lI8Z-o.js";import"./ChildrenLevel-CDDXI64E.js";import"./scroll-area-ikOl81J3.js";import"./index-BRRwjKX1.js";import"./index-CKC94nx8.js";const t=`import '@/globals.css'\r
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
`,n=o(a),b={title:"Example/TaxonomyTree",component:r,parameters:{docs:{source:{code:t,language:"tsx",type:"code"}}}},e={args:{isLoading:!1,expand:!0,value:"",tree:n,setNode:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    expand: true,
    value: "",
    tree: treeData,
    setNode: () => {}
  }
}`,...e.parameters?.docs?.source}}};const x=["TaxonomyTreeCode"];export{e as TaxonomyTreeCode,x as __namedExportsOrder,b as default};
