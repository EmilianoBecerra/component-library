import{C as r}from"./ChildrenLevel-BOkj0OBW.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-CjQLVfP9.js";import"./preload-helper-B_lI8Z-o.js";import"./index-FvjvVjiw.js";import"./index-Ddwib-r8.js";import"./index-CDV84p1i.js";const n=`import type { TreeNode } from "@/interface/interface";\r
import {\r
  Collapsible,\r
  CollapsibleContent,\r
  CollapsibleTrigger,\r
} from "@/components/ui/collapsible";\r
import { ScrollArea } from "@/components/ui/scroll-area";\r
import { useState, useEffect } from "react";\r
import { ChevronRightIcon } from "lucide-react";\r
\r
export function ChildrenLevel({ treeNode, depth = 1, expand, value, setNode }: { treeNode: TreeNode, depth?: number, expand: boolean, value: string, setNode: (node: TreeNode) => void }) {\r
  const [openChildren, setOpenChildren] = useState(expand);\r
\r
  useEffect(() => {\r
    setOpenChildren(expand);\r
  }, [expand]);\r
\r
  const valueLowerCase = value.toLocaleLowerCase();\r
\r
  return (\r
    <Collapsible\r
      open={openChildren}\r
      onOpenChange={setOpenChildren}\r
      className="group"\r
      style={{ marginLeft: depth * 5 }}\r
    >\r
      {treeNode.children && treeNode.children.length > 0 ?\r
        <div>\r
          <ScrollArea>\r
            <div className="flex">\r
              <CollapsibleTrigger className="flex items-center gap-1">\r
                <ChevronRightIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />\r
              </CollapsibleTrigger>\r
              <p\r
                onClick={() => setNode(treeNode)}\r
                style={{ fontWeight: (treeNode.name.toLocaleLowerCase().includes(valueLowerCase) && valueLowerCase !== "" || treeNode.source_id.includes(valueLowerCase) && valueLowerCase !== "") ? "600" : "lighter" }}\r
              >\r
                {treeNode.name}\r
              </p>\r
            </div>\r
          </ScrollArea>\r
          <ScrollArea>\r
            {treeNode.children.map(c => (\r
              <CollapsibleContent key={c.node_id}>\r
                {c.children && c.children.length > 0 ?\r
                  <ChildrenLevel\r
                    treeNode={c}\r
                    depth={depth + 1}\r
                    expand={expand}\r
                    value={value}\r
                    setNode={setNode}\r
                  /> :\r
                  <div\r
                    className="flex items-center gap-2"\r
                    style={{ marginLeft: (depth + 1) * 5 }}\r
                    onClick={() => setNode(c)}\r
                  >\r
                    {<img src={c.metadata?.image_url === undefined ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.98Dnptl8fA-9G4_A-wow8AHaHa%3Fpid%3DApi&f=1&ipt=6fdc0f3851102ba6fa73bcadb1eaf4ba2294164feafa385063d92249051bcf7a&ipo=images" : c.metadata?.image_url} className="size-5 justify-center" />}\r
                    <p\r
                      style={{ fontWeight: (c.name.toLocaleLowerCase().includes(valueLowerCase) && valueLowerCase !== "" || c.source_id.includes(valueLowerCase) && valueLowerCase !== "") ? "600" : "lighter" }}\r
                    >\r
                      {c.name}\r
                    </p>\r
                  </div>\r
                }\r
              </CollapsibleContent>\r
            ))}\r
          </ScrollArea>\r
        </div>\r
        :\r
        <CollapsibleContent>\r
          <p style={{ marginLeft: depth * 5 }}>{treeNode.name}</p>\r
        </CollapsibleContent>\r
      }\r
    </Collapsible>\r
  )\r
}\r
`,s={title:"Example/TaxonomyTree/ChildrenLevel",component:r,parameters:{docs:{source:{code:n,language:"tsx",type:"code"}}}},e={args:{treeNode:{node_id:"1",graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"apple"},parent_ids:[],children:[{node_id:"2",graph_id:100,source_id:"dep-001",name:"Capa de Datos",parent_ids:["1"],children:[{node_id:"4",graph_id:100,source_id:"db-001",name:"PostgreSQL Master",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"apple"},parent_ids:["2"],children:[{node_id:"10",graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"apple"},parent_ids:["4","5"],children:[]}]}]},{node_id:"3",graph_id:100,source_id:"dep-002",name:"Capa de Aplicación",parent_ids:["1"],children:[{node_id:"5",graph_id:100,source_id:"srv-001",name:"API Gateway",metadata:{image_url:"JWT",primary:"red"},parent_ids:["3"],children:[{node_id:"10",graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"minion"},parent_ids:["4","5"],children:[]},{node_id:"6",graph_id:100,source_id:"srv-002",name:"Microservicio Auth",parent_ids:["5"],children:[{node_id:"7",graph_id:100,source_id:"sub-srv-001",name:"Módulo 2FA (Deep Child)",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",primary:"apple"},parent_ids:["6"],children:[]}]}]}]}]},depth:0,expand:!0,value:"",setNode:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    treeNode: {
      node_id: "1",
      graph_id: 100,
      source_id: "root-001",
      name: "Infraestructura Global",
      metadata: {
        image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
        primary: "apple"
      },
      parent_ids: [],
      children: [{
        node_id: "2",
        graph_id: 100,
        source_id: "dep-001",
        name: "Capa de Datos",
        parent_ids: ["1"],
        children: [{
          node_id: "4",
          graph_id: 100,
          source_id: "db-001",
          name: "PostgreSQL Master",
          metadata: {
            image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
            primary: "apple"
          },
          parent_ids: ["2"],
          children: [{
            node_id: "10",
            graph_id: 100,
            source_id: "sync-001",
            name: "Servicio de Backup Híbrido",
            metadata: {
              image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
              primary: "apple"
            },
            parent_ids: ["4", "5"],
            children: []
          }]
        }]
      }, {
        node_id: "3",
        graph_id: 100,
        source_id: "dep-002",
        name: "Capa de Aplicación",
        parent_ids: ["1"],
        children: [{
          node_id: "5",
          graph_id: 100,
          source_id: "srv-001",
          name: "API Gateway",
          metadata: {
            image_url: "JWT",
            primary: "red"
          },
          parent_ids: ["3"],
          children: [{
            node_id: "10",
            graph_id: 100,
            source_id: "sync-001",
            name: "Servicio de Backup Híbrido",
            metadata: {
              image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
              primary: "minion"
            },
            parent_ids: ["4", "5"],
            children: []
          }, {
            node_id: "6",
            graph_id: 100,
            source_id: "srv-002",
            name: "Microservicio Auth",
            parent_ids: ["5"],
            children: [{
              node_id: "7",
              graph_id: 100,
              source_id: "sub-srv-001",
              name: "Módulo 2FA (Deep Child)",
              metadata: {
                image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
                primary: "apple"
              },
              parent_ids: ["6"],
              children: []
            }]
          }]
        }]
      }]
    },
    depth: 0,
    expand: true,
    value: "",
    setNode: () => {}
  }
}`,...e.parameters?.docs?.source}}};const c=["ChildrenLevelExample"];export{e as ChildrenLevelExample,c as __namedExportsOrder,s as default};
