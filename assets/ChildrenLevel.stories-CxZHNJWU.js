import{C as n}from"./ChildrenLevel-BmDXDxcL.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Dz8P0qtD.js";import"./preload-helper-B_lI8Z-o.js";import"./index-DRrjXmso.js";import"./index-CmsD9ECk.js";const r=`import type { TreeNode } from "@/interface/interface";\r
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
                    <p style={{ marginLeft: depth * 5 }}> {treeNode.name}</p>\r
                </CollapsibleContent>\r
            }\r
        </Collapsible >\r
    )\r
}`,s={title:"Example/TaxonomyTree/ChildrenLevel",component:n,parameters:{docs:{source:{code:r,language:"tsx",type:"code"}}}},e={args:{treeNode:{node_id:1,graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://api.icon/cloud.png",region:"AWS"},parent_ids:[],children:[{node_id:2,graph_id:100,source_id:"dep-001",name:"Capa de Datos",parent_ids:[1],children:[{node_id:4,graph_id:100,source_id:"db-001",name:"PostgreSQL Master",metadata:{port:5432,status:"active"},parent_ids:[2],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{type:"Cross-platform"},parent_ids:[4,5],children:[]}]}]},{node_id:3,graph_id:100,source_id:"dep-002",name:"Capa de Aplicación",parent_ids:[1],children:[{node_id:5,graph_id:100,source_id:"srv-001",name:"API Gateway",metadata:{auth:"JWT"},parent_ids:[3],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",parent_ids:[4,5],children:[]},{node_id:6,graph_id:100,source_id:"srv-002",name:"Microservicio Auth",parent_ids:[5],children:[{node_id:7,graph_id:100,source_id:"sub-srv-001",name:"Módulo 2FA (Deep Child)",metadata:{provider:"Google"},parent_ids:[6],children:[]}]}]}]}]},depth:0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    treeNode: {
      node_id: 1,
      graph_id: 100,
      source_id: "root-001",
      name: "Infraestructura Global",
      metadata: {
        image_url: "https://api.icon/cloud.png",
        region: "AWS"
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
            port: 5432,
            status: "active"
          },
          parent_ids: [2],
          children: [{
            node_id: 10,
            graph_id: 100,
            source_id: "sync-001",
            name: "Servicio de Backup Híbrido",
            metadata: {
              type: "Cross-platform"
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
                provider: "Google"
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
}`,...e.parameters?.docs?.source}}};const l=["ChildrenLevelCode"];export{e as ChildrenLevelCode,l as __namedExportsOrder,s as default};
