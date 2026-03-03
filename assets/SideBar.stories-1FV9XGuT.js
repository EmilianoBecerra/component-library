import{S as e}from"./SideBar-DHiM6MB6.js";import"./jsx-runtime-u17CrQMm.js";import"./InfoRow-Dy5jMV-F.js";import"./iframe-DOE9zQDk.js";import"./preload-helper-B_lI8Z-o.js";import"./index-C4ZdvhJs.js";import"./index-B9oVnICJ.js";import"./scroll-area-ikOl81J3.js";import"./index-BRRwjKX1.js";import"./index-CKC94nx8.js";const a=`import type { TreeNode } from "@/interface/interface";\r
import { InfoRow } from "./InfoRow";\r
import { Badge } from "@/components/ui/badge"\r
import { ScrollArea } from "@/components/ui/scroll-area"\r
import { Separator } from "@/components/ui/separator"\r
\r
export function SideBar({ node }: { node: TreeNode | undefined }) {\r
  return (\r
    <div className="w-12/12 h-12/12 p-5 text-foreground">\r
      <ScrollArea className="h-12/12 w-12/12 rounded-md border p-4">\r
        <header className="flex flex-col h-auto">\r
          <h2 className="font-bold text-2xl">Node Properties</h2>\r
          {\r
            node ?\r
              <div className="flex flex-col mb-3">\r
                <Badge variant="default">ID: {node?.node_id ?? "-."}</Badge>\r
                <p className="capitalize ml-1">\r
                  Name: {node?.name ?? "-."}\r
                </p>\r
              </div>\r
              : ""\r
          }\r
        </header>\r
        <hr />\r
        <main>\r
          {node ?\r
            <div>\r
              <InfoRow label={"Name"} data={node.name} isImg={false} />\r
              <Separator />\r
              <InfoRow label={"Source"} data={node.source_id} isImg={false} />\r
              <Separator />\r
              <InfoRow label={"Graph ID"} data={node.graph_id} isImg={false} />\r
              <Separator />\r
              <InfoRow label={"Image"} data={node.metadata?.image_url} isImg={true} />\r
              <Separator />\r
              <p className="capitalize font-semibold">Metadata: </p>\r
              <div className="bg-amber-50 p-10 rounded-sm text-sm overflow-auto">\r
                {node.metadata?.primary && <pre>{JSON.stringify(node.metadata?.primary, null, 2)}</pre>}\r
              </div>\r
\r
            </div>\r
            :\r
            <div className="flex justify-center items-center h-200 text-3xl">\r
              <p className=" w-6/12 text-center size-40 border-2 outline border-double flex justify-center items-center m-2 my-8 mx-3">Select a node in the tree to view its properties</p>\r
            </div>\r
          }\r
        </main>\r
      </ScrollArea>\r
    </div>\r
  )\r
}\r
\r
\r
`,u={title:"Example/TaxonomyTree/SideBar",component:e,parameters:{docs:{source:{code:a,language:"tsx",type:"code"}}}},r={args:{node:{node_id:"1",graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"apple"},parent_ids:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    node: {
      node_id: "1",
      graph_id: 100,
      source_id: "root-001",
      name: "Infraestructura Global",
      metadata: {
        image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
        primary: "apple"
      },
      parent_ids: []
    }
  }
}`,...r.parameters?.docs?.source}}};const f=["SideBarCode"];export{r as SideBarCode,f as __namedExportsOrder,u as default};
