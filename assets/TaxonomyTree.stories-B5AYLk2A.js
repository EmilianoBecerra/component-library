import{j as r}from"./jsx-runtime-u17CrQMm.js";/* empty css                */import{c as n,C as t}from"./ChildrenLevel-CztAIlcV.js";import"./iframe-DTVB-yf2.js";import"./preload-helper-B_lI8Z-o.js";import"./index-DdSQgTOk.js";import"./index-CHIj9wLH.js";const m=`\r
import '@/globals.css'\r
import { Skeleton } from '@/components/ui/skeleton';\r
import { ChildrenLevel } from './ChildrenLevel';\r
\r
\r
export function TaxonomyTree({ isLoading }: { isLoading: boolean }) {\r
    const treeData = [\r
        {\r
            node_id: 1,\r
            graph_id: 100,\r
            source_id: "root-001",\r
            name: "Infraestructura Global",\r
            metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },\r
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
                            metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },\r
                            parent_ids: [2],\r
                            children: [\r
                                {\r
                                    node_id: 10,\r
                                    graph_id: 100,\r
                                    source_id: "sync-001",\r
                                    name: "Servicio de Backup Híbrido",\r
                                    metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },\r
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
                                    metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "minion" },\r
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
                                            metadata: { image_url: "https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg", region: "apple" },\r
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
`;function e({className:o,...i}){return r.jsx("div",{"data-slot":"skeleton",className:n("bg-accent animate-pulse rounded-md",o),...i})}e.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};function s({isLoading:o}){const i=[{node_id:1,graph_id:100,source_id:"root-001",name:"Infraestructura Global",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[],children:[{node_id:2,graph_id:100,source_id:"dep-001",name:"Capa de Datos",parent_ids:[1],children:[{node_id:4,graph_id:100,source_id:"db-001",name:"PostgreSQL Master",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[2],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[4,5],children:[]}]}]},{node_id:3,graph_id:100,source_id:"dep-002",name:"Capa de Aplicación",parent_ids:[1],children:[{node_id:5,graph_id:100,source_id:"srv-001",name:"API Gateway",metadata:{auth:"JWT"},parent_ids:[3],children:[{node_id:10,graph_id:100,source_id:"sync-001",name:"Servicio de Backup Híbrido",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"minion"},parent_ids:[4,5],children:[]},{node_id:6,graph_id:100,source_id:"srv-002",name:"Microservicio Auth",parent_ids:[5],children:[{node_id:7,graph_id:100,source_id:"sub-srv-001",name:"Módulo 2FA (Deep Child)",metadata:{image_url:"https://res.cloudinary.com/dnrbiplhc/image/upload/v1771435320/tomato-svgrepo-com_gefort.svg",region:"apple"},parent_ids:[6],children:[]}]}]}]}]}];return r.jsx("div",{className:"min-h-1 m-5 w-12/12 --font-font-mono --color-primary grid ",children:o?r.jsxs("div",{children:[r.jsx(e,{className:"h-5 w-25 mb-2"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-5"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-10"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-15"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-5"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-10"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-15"}),r.jsx(e,{className:"h-5 w-25 mb-2 ml-20"})]}):i.map(d=>r.jsx(t,{treeNode:d,depth:0},d.node_id))})}s.__docgenInfo={description:"",methods:[],displayName:"TaxonomyTree",props:{isLoading:{required:!0,tsType:{name:"boolean"},description:""}}};const v={title:"Example/TaxonomyTree",component:s,parameters:{docs:{source:{code:m,language:"tsx",type:"code"}}}},a={args:{isLoading:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false
  }
}`,...a.parameters?.docs?.source}}};const b=["TaxonomyTreeCode"];export{a as TaxonomyTreeCode,b as __namedExportsOrder,v as default};
