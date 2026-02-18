import{j as r}from"./jsx-runtime-u17CrQMm.js";/* empty css                */import{c as s,C as t}from"./ChildrenLevel-BE-p57he.js";import"./iframe-Ch288Uek.js";import"./preload-helper-B_lI8Z-o.js";import"./index-CIVpAzKs.js";import"./index-BUyNl4LZ.js";const m=`/* import type { TreeNode } from '@/interface/interface.ts' */\r
import '@/globals.css'\r
import { ChildrenLevel } from '@/components/ChildrenLevel.tsx'\r
import { Skeleton } from '@/components/ui/skeleton';\r
\r
\r
export function TaxonomyTree({ isLoading }: { isLoading: boolean }) {\r
    const treeData = [\r
        {\r
            node_id: 1,\r
            graph_id: 100,\r
            source_id: "root-001",\r
            name: "Infraestructura Global",\r
            metadata: { image_url: "https://api.icon/cloud.png", region: "AWS" },\r
            parent_ids: [],\r
            children: [\r
                {\r
                    node_id: 2,\r
                    graph_id: 100,\r
                    source_id: "dep-001",\r
                    name: "Capa de Datos",\r
                    parent_ids: [1],\r
                    children: [\r
                        {\r
                            node_id: 4,\r
                            graph_id: 100,\r
                            source_id: "db-001",\r
                            name: "PostgreSQL Master",\r
                            metadata: { port: 5432, status: "active" },\r
                            parent_ids: [2],\r
                            children: [\r
                                {\r
                                    node_id: 10, // <--- ESTE NODO TIENE DOS PADRES (4 y 5)\r
                                    graph_id: 100,\r
                                    source_id: "sync-001",\r
                                    name: "Servicio de Backup Híbrido",\r
                                    metadata: { type: "Cross-platform" },\r
                                    parent_ids: [4, 5],\r
                                    children: []\r
                                }\r
                            ]\r
                        }\r
                    ]\r
                },\r
                {\r
                    node_id: 3,\r
                    graph_id: 100,\r
                    source_id: "dep-002",\r
                    name: "Capa de Aplicación",\r
                    parent_ids: [1],\r
                    children: [\r
                        {\r
                            node_id: 5,\r
                            graph_id: 100,\r
                            source_id: "srv-001",\r
                            name: "API Gateway",\r
                            metadata: { auth: "JWT" },\r
                            parent_ids: [3],\r
                            children: [\r
                                {\r
                                    node_id: 10,\r
                                    graph_id: 100,\r
                                    source_id: "sync-001",\r
                                    name: "Servicio de Backup Híbrido",\r
                                    parent_ids: [4, 5],\r
                                    children: []\r
                                },\r
                                {\r
                                    node_id: 6,\r
                                    graph_id: 100,\r
                                    source_id: "srv-002",\r
                                    name: "Microservicio Auth",\r
                                    parent_ids: [5],\r
                                    children: [\r
                                        {\r
                                            node_id: 7,\r
                                            graph_id: 100,\r
                                            source_id: "sub-srv-001",\r
                                            name: "Módulo 2FA (Deep Child)",\r
                                            metadata: { provider: "Google" },\r
                                            parent_ids: [6],\r
                                            children: []\r
                                        }\r
                                    ]\r
                                }\r
                            ]\r
                        }\r
                    ]\r
                }\r
            ]\r
        }\r
    ];\r
    return (\r
        <div className='min-h-1 m-5 w-12/12 --font-font-mono --color-primary grid '>\r
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
                treeData.map(branch => <ChildrenLevel treeNode={branch} depth={0} key={branch.node_id} />)\r
            }\r
        </div >\r
    )\r
}\r
\r
`;function e({className:d,...o}){return r.jsx("div",{"data-slot":"skeleton",className:s("bg-accent animate-pulse rounded-md",d),...o})}e.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};function n({isLoading:d}){const o=[{node_id:1,graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://api.icon/cloud.png",region:"AWS"},parent_ids:[],children:[{node_id:2,graph_id:100,source_id:"dep-001",name:"Capa de Datos",parent_ids:[1],children:[{node_id:4,graph_id:100,source_id:"db-001",name:"PostgreSQL Master",metadata:{port:5432,status:"active"},parent_ids:[2],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{type:"Cross-platform"},parent_ids:[4,5],children:[]}]}]},{node_id:3,graph_id:100,source_id:"dep-002",name:"Capa de Aplicación",parent_ids:[1],children:[{node_id:5,graph_id:100,source_id:"srv-001",name:"API Gateway",metadata:{auth:"JWT"},parent_ids:[3],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",parent_ids:[4,5],children:[]},{node_id:6,graph_id:100,source_id:"srv-002",name:"Microservicio Auth",parent_ids:[5],children:[{node_id:7,graph_id:100,source_id:"sub-srv-001",name:"Módulo 2FA (Deep Child)",metadata:{provider:"Google"},parent_ids:[6],children:[]}]}]}]}]}];return r.jsx("div",{className:"min-h-1 m-5 w-12/12 --font-font-mono --color-primary grid ",children:d?r.jsxs("div",{children:[r.jsx(e,{className:"h-5 w-25 mb-2"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-5"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-10"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-15"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-5"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-10"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-15"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-20"})]}):o.map(i=>r.jsx(t,{treeNode:i,depth:0},i.node_id))})}n.__docgenInfo={description:"",methods:[],displayName:"TaxonomyTree",props:{isLoading:{required:!0,tsType:{name:"boolean"},description:""}}};const b={title:"Example/TaxonomyTree",component:n,parameters:{docs:{source:{code:m,language:"tsx",type:"code"}}}},a={args:{isLoading:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false
  }
}`,...a.parameters?.docs?.source}}};const v=["TaxonomyTreeCode"];export{a as TaxonomyTreeCode,v as __namedExportsOrder,b as default};
