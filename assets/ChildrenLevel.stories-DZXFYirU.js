import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as c,S as l,a as p,b as h,c as d}from"./chevron-right-CwGe4Sxv.js";import{r as m}from"./iframe-B9OM2aFa.js";/* empty css                */import"./index-CYsSPQsZ.js";import"./index-BXCBiUkb.js";import"./preload-helper-B_lI8Z-o.js";function s({childrens:r,depth:a=1}){const[t,o]=m.useState(!1);return e.jsx(c,{open:t,onOpenChange:o,className:"group",style:{marginLeft:a*5},children:r.children&&r.children.length>0?e.jsxs("div",{children:[e.jsx(l,{children:e.jsxs(p,{className:"flex items-center gap-1",children:[e.jsx(h,{className:"h-4 w-4 transition-transform group-data-[state=open]:rotate-90"}),e.jsx("p",{style:{fontWeight:r.source_id==="222"?"bold":"lighter"},children:r.name})]})}),e.jsx(l,{children:r.children.map(n=>e.jsx(d,{children:n.children&&n.children.length>0?e.jsx(s,{childrens:n,depth:a+1}):e.jsxs("div",{className:"flex items-center gap-2",style:{marginLeft:(a+1)*5},children:[n.metadata?.image_url&&e.jsx("img",{src:n.metadata.image_url,className:"h-6 w-6"}),e.jsx("p",{style:{fontWeight:"lighter"},children:n.name})]})},n.node_id))})]}):e.jsx(d,{children:e.jsxs("p",{style:{marginLeft:a*5},children:[" ",r.name]})})})}s.__docgenInfo={description:"",methods:[],displayName:"ChildrenLevel",props:{childrens:{required:!0,tsType:{name:"TreeNode"},description:""},depth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const g=`import type { TreeNode } from "@/interface/interface";\r
import {\r
    Collapsible,\r
    CollapsibleContent,\r
    CollapsibleTrigger,\r
} from "@/components/ui/collapsible";\r
import { ScrollArea } from "@/components/ui/scroll-area";\r
import { useState } from "react";\r
import "@/globals.css";\r
import { ChevronRightIcon } from "lucide-react";\r
\r
\r
export function ChildrenLevel({ childrens, depth = 1 }: { childrens: TreeNode, depth?: number }) {\r
    const [openChildren, setOpenChildren] = useState(false);\r
\r
\r
    return (\r
        <Collapsible open={openChildren} onOpenChange={setOpenChildren} className="group" style={{ marginLeft: depth * 5 }}>\r
            {childrens.children && childrens.children.length > 0 ?\r
                <div>\r
                    <ScrollArea>\r
                        <CollapsibleTrigger className="flex items-center gap-1">\r
                            <ChevronRightIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />\r
                            <p style={{ fontWeight: childrens.source_id === "222" ? "bold" : "lighter" }}>\r
                                {childrens.name}</p>\r
                        </CollapsibleTrigger>\r
                    </ScrollArea>\r
                    <ScrollArea>\r
                        {\r
                            childrens.children.map(c => (\r
                                <CollapsibleContent key={c.node_id}>\r
                                    {c.children && c.children.length > 0 ?\r
                                        <ChildrenLevel childrens={c} depth={depth + 1} /> :\r
                                        <div className="flex items-center gap-2" style={{ marginLeft: (depth + 1) * 5 }}>\r
                                            {c.metadata?.image_url && <img src={c.metadata.image_url} className="h-6 w-6" />}\r
                                            <p style={{ fontWeight: "lighter" }}>{c.name}</p>\r
                                        </div>\r
                                    }\r
                                </CollapsibleContent>\r
                            ))\r
                        }\r
                    </ScrollArea>\r
                </div>\r
                :\r
                <CollapsibleContent>\r
                    <p style={{ marginLeft: depth * 5 }}> {childrens.name}</p>\r
                </CollapsibleContent>\r
            }\r
        </Collapsible >\r
    )\r
}`,y={title:"Example/TaxonomyTree/ChildrenLevel",component:s,parameters:{docs:{source:{code:g,language:"tsx",type:"code"}}}},i={args:{childrens:{node_id:2,graph_id:2,source_id:"222",name:"Food & Beverages",children:[{node_id:3,graph_id:3,source_id:"321",name:"Fresh Produce",children:[{node_id:0xa5cf2a08e458,graph_id:0xa5cf2a08e458,source_id:"dsalkhaslkdjhasdlk",name:"Fruits",metadata:{key:"123",image_url:"https://cdn-icons-png.flaticon.com/128/3137/3137044.png"}},{node_id:9182409182999,graph_id:9182409182999,source_id:"99128310298318391jkasjdj",name:"Vegetables",metadata:{key:"123",image_url:"https://cdn-icons-png.flaticon.com/128/3137/3137044.png"}}]},{node_id:4,graph_id:4,source_id:"333",name:"Dairy",children:[{node_id:1782390712,graph_id:1782390712,source_id:"nlkkkasdj9qwe9",name:"Milk"},{node_id:9099182391283,graph_id:9099182391283,source_id:"asdasdffffasdasd",name:"Cheese"}]}]},depth:1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    childrens: {
      node_id: 2,
      graph_id: 2,
      source_id: "222",
      name: "Food & Beverages",
      children: [{
        node_id: 3,
        graph_id: 3,
        source_id: "321",
        name: "Fresh Produce",
        children: [{
          node_id: 182309182039128,
          graph_id: 182309182039128,
          source_id: "dsalkhaslkdjhasdlk",
          name: "Fruits",
          metadata: {
            key: "123",
            image_url: "https://cdn-icons-png.flaticon.com/128/3137/3137044.png"
          }
        }, {
          node_id: 9182409182999,
          graph_id: 9182409182999,
          source_id: "99128310298318391jkasjdj",
          name: "Vegetables",
          metadata: {
            key: "123",
            image_url: "https://cdn-icons-png.flaticon.com/128/3137/3137044.png"
          }
        }]
      }, {
        node_id: 4,
        graph_id: 4,
        source_id: "333",
        name: "Dairy",
        children: [{
          node_id: 1782390712,
          graph_id: 1782390712,
          source_id: "nlkkkasdj9qwe9",
          name: "Milk"
        }, {
          node_id: 9099182391283,
          graph_id: 9099182391283,
          source_id: "asdasdffffasdasd",
          name: "Cheese"
        }]
      }]
    },
    depth: 1
  }
}`,...i.parameters?.docs?.source}}};const k=["ChildrenLevelCode"];export{i as ChildrenLevelCode,k as __namedExportsOrder,y as default};
