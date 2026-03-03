import{S as r}from"./SideBar-DVPPk3fa.js";import"./jsx-runtime-u17CrQMm.js";import"./InfoRow-Dy5jMV-F.js";const a=`import type { TreeNode } from "@/interface/interface";\r
import { InfoRow } from "./InfoRow";\r
\r
export function SideBar({ node }: { node: TreeNode | undefined }) {\r
  return (\r
    <div className="w-12/12 h-12/12 p-5 text-foreground">\r
      <header className="flex flex-col h-auto">\r
        <h2 className="font-bold text-2xl">Node Properties</h2>\r
        {\r
          node ?\r
            <div className="flex flex-col mb-3">\r
              <p className="capitalize">\r
                ID: {node?.node_id ?? "-."}\r
              </p>\r
              <p className="capitalize">\r
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
            <InfoRow label={"Source"} data={node.source_id} isImg={false} />\r
            <InfoRow label={"Graph ID"} data={node.graph_id} isImg={false} />\r
            <InfoRow label={"Image"} data={node.metadata?.image_url} isImg={true} />\r
            <p>Metadata: </p>\r
            <div className="bg-amber-100 p-10 rounded-sm text-sm overflow-auto">\r
              {node.metadata?.primary && <pre>{JSON.stringify(node.metadata?.primary, null, 2)}</pre>}\r
            </div>\r
\r
          </div>\r
          :\r
          <div className="flex justify-center items-center h-200 text-3xl">\r
            <p className=" w-6/12 text-center">Select a node in the tree to view its properties</p>\r
          </div>\r
        }\r
      </main>\r
    </div>\r
  )\r
}\r
\r
\r
`,d={title:"Example/TaxonomyTree/SideBar",component:r,parameters:{docs:{source:{code:a,language:"tsx",type:"code"}}}},e={args:{node:{node_id:"1",graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"apple"},parent_ids:[]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const i=["SideBarCode"];export{e as SideBarCode,i as __namedExportsOrder,d as default};
