import{C as r}from"./ChildrenLevel-BE-p57he.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Ch288Uek.js";import"./preload-helper-B_lI8Z-o.js";import"./index-CIVpAzKs.js";import"./index-BUyNl4LZ.js";const n=`import type { TreeNode } from "@/interface/interface";\r
import {\r
    Collapsible,\r
    CollapsibleContent,\r
    CollapsibleTrigger,\r
} from "@/components/ui/collapsible";\r
import { ScrollArea } from "@/components/ui/scroll-area";\r
import { useState } from "react";\r
import { ChevronRightIcon } from "lucide-react";\r
\r
\r
export function ChildrenLevel({ treeNode, depth = 1 }: { treeNode: TreeNode, depth?: number }) {\r
    const [openChildren, setOpenChildren] = useState(true);\r
\r
    return (\r
        <Collapsible open={openChildren} onOpenChange={setOpenChildren} className="group" style={{ marginLeft: depth * 5 }}>\r
            {treeNode.children && treeNode.children.length > 0 ?\r
                <div>\r
                    <ScrollArea>\r
                        <CollapsibleTrigger className="flex items-center gap-1">\r
                            <ChevronRightIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />\r
                            <p>\r
                                {treeNode.name}</p>\r
                        </CollapsibleTrigger>\r
                    </ScrollArea>\r
                    <ScrollArea>\r
                        {\r
                            treeNode.children.map(c => (\r
                                <CollapsibleContent key={c.node_id}>\r
                                    {c.children && c.children.length > 0 ?\r
                                        <ChildrenLevel treeNode={c} depth={depth + 1} /> :\r
                                        <div className="flex items-center gap-2" style={{ marginLeft: (depth + 1) * 5 }}>\r
                                            {c.metadata?.image_url && <img src={c.metadata.image_url} className="size-4" />}\r
                                            <p>{c.name}</p>\r
                                        </div>\r
                                    }\r
                                </CollapsibleContent>\r
                            ))\r
                        }\r
                    </ScrollArea>\r
                </div>\r
                :\r
                <CollapsibleContent>\r
                    <p style={{ marginLeft: depth * 5 }}> {treeNode.name}</p>\r
                </CollapsibleContent>\r
            }\r
        </Collapsible >\r
    )\r
}`,l={title:"Example/TaxonomyTree/ChildrenLevel",component:r,parameters:{docs:{source:{code:n,language:"tsx",type:"code"}}}},e={args:{treeNode:{node_id:1,graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[],children:[{node_id:2,graph_id:100,source_id:"dep-001",name:"Capa de Datos",parent_ids:[1],children:[{node_id:4,graph_id:100,source_id:"db-001",name:"PostgreSQL Master",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[2],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[4,5],children:[]}]}]},{node_id:3,graph_id:100,source_id:"dep-002",name:"Capa de Aplicación",parent_ids:[1],children:[{node_id:5,graph_id:100,source_id:"srv-001",name:"API Gateway",metadata:{auth:"JWT"},parent_ids:[3],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"minion"},parent_ids:[4,5],children:[]},{node_id:6,graph_id:100,source_id:"srv-002",name:"Microservicio Auth",parent_ids:[5],children:[{node_id:7,graph_id:100,source_id:"sub-srv-001",name:"Módulo 2FA (Deep Child)",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[6],children:[]}]}]}]}]},depth:0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    treeNode: {
      node_id: 1,
      graph_id: 100,
      source_id: "root-001",
      name: "Infraestructura Global",
      metadata: {
        image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
        region: "apple"
      },
      parent_ids: [],
      children: [{
        node_id: 2,
        graph_id: 100,
        source_id: "dep-001",
        name: "Capa de Datos",
        parent_ids: [1],
        children: [{
          node_id: 4,
          graph_id: 100,
          source_id: "db-001",
          name: "PostgreSQL Master",
          metadata: {
            image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
            region: "apple"
          },
          parent_ids: [2],
          children: [{
            node_id: 10,
            graph_id: 100,
            source_id: "sync-001",
            name: "Servicio de Backup Híbrido",
            metadata: {
              image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
              region: "apple"
            },
            parent_ids: [4, 5],
            children: []
          }]
        }]
      }, {
        node_id: 3,
        graph_id: 100,
        source_id: "dep-002",
        name: "Capa de Aplicación",
        parent_ids: [1],
        children: [{
          node_id: 5,
          graph_id: 100,
          source_id: "srv-001",
          name: "API Gateway",
          metadata: {
            auth: "JWT"
          },
          parent_ids: [3],
          children: [{
            node_id: 10,
            graph_id: 100,
            source_id: "sync-001",
            name: "Servicio de Backup Híbrido",
            metadata: {
              image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
              region: "minion"
            },
            parent_ids: [4, 5],
            children: []
          }, {
            node_id: 6,
            graph_id: 100,
            source_id: "srv-002",
            name: "Microservicio Auth",
            parent_ids: [5],
            children: [{
              node_id: 7,
              graph_id: 100,
              source_id: "sub-srv-001",
              name: "Módulo 2FA (Deep Child)",
              metadata: {
                image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",
                region: "apple"
              },
              parent_ids: [6],
              children: []
            }]
          }]
        }]
      }]
    },
    depth: 0
  }
}`,...e.parameters?.docs?.source}}};const s=["ChildrenLevelCode"];export{e as ChildrenLevelCode,s as __namedExportsOrder,l as default};
