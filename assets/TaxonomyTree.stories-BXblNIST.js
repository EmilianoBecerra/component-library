import{j as e}from"./jsx-runtime-u17CrQMm.js";/* empty css                */import{C as m,S as o,a as h,b as p,c as s}from"./chevron-right-CwGe4Sxv.js";import{r as _}from"./iframe-B9OM2aFa.js";import"./index-CYsSPQsZ.js";import"./index-BXCBiUkb.js";import"./preload-helper-B_lI8Z-o.js";const g=`import type { TreeNode } from '@/interface/interface.ts'\r
import '@/globals.css'\r
import { ChildrenLevel } from '@/components/ChildrenLevel.tsx'\r
\r
\r
export function TaxonomyTree() {\r
    const fetchhh: TreeNode[] = [\r
        {\r
            node_id: 1,\r
            graph_id: 1,\r
            source_id: "123",\r
            name: "$Root$",\r
            children: [\r
                {\r
                    node_id: 2,\r
                    graph_id: 2,\r
                    source_id: "222",\r
                    name: "Food & Beverages",\r
                    children: [\r
                        {\r
                            node_id: 3,\r
                            graph_id: 3,\r
                            source_id: "321",\r
                            name: "Fresh Produce",\r
                            children: [\r
                                {\r
                                    node_id: 182309182039128,\r
                                    graph_id: 182309182039128,\r
                                    source_id: "dsalkhaslkdjhasdlk",\r
                                    name: "Fruits",\r
                                    metadata: { key: "123", image_url: "https://cdn-icons-png.flaticon.com/128/3137/3137044.png" }\r
                                },\r
                                {\r
                                    node_id: 9182409182999,\r
                                    graph_id: 9182409182999,\r
                                    source_id: "99128310298318391jkasjdj",\r
                                    name: "Vegetables",\r
                                    metadata: { key: "123", image_url: "https://cdn-icons-png.flaticon.com/128/3137/3137044.png" }\r
                                }\r
                            ]\r
                        },\r
                        {\r
                            node_id: 4,\r
                            graph_id: 4,\r
                            source_id: "333",\r
                            name: "Dairy",\r
                            children: [\r
                                {\r
                                    node_id: 1782390712,\r
                                    graph_id: 1782390712,\r
                                    source_id: "nlkkkasdj9qwe9",\r
                                    name: "Milk",\r
                                },\r
                                {\r
                                    node_id: 9099182391283,\r
                                    graph_id: 9099182391283,\r
                                    source_id: "asdasdffffasdasd",\r
                                    name: "Cheese",\r
                                },\r
\r
                            ]\r
                        }\r
                    ]\r
                },\r
                {\r
                    node_id: 102,\r
                    graph_id: 102,\r
                    source_id: "222",\r
                    name: "Household",\r
                    children: [\r
                        {\r
                            node_id: 33123123,\r
                            graph_id: 33123123,\r
                            source_id: "asdjaskdjaksd",\r
                            name: "none",\r
                            children: [\r
                                {\r
                                    node_id: 9998989899998,\r
                                    graph_id: 9998989899998,\r
                                    source_id: "lllllkasodl",\r
                                    name: "Cleaning Supplies",\r
                                },\r
                                {\r
                                    node_id: 9900090898,\r
                                    graph_id: 9900090898,\r
                                    source_id: "nnnnnnjaklsdjhnaskdj",\r
                                    name: "Paper Product",\r
                                }\r
                            ]\r
                        }\r
                    ],\r
                }\r
            ]\r
        }\r
    ]\r
\r
    return (\r
        <div className='flex flex-col justify-center min-h-1 m-5'>\r
            {fetchhh.map((branch: TreeNode) => (\r
                <ChildrenLevel treeNode={branch} depth={0} key={branch.node_id} />\r
            ))}\r
        </div>\r
    )\r
}\r
\r
`;function i({treeNode:r,depth:d=1}){const[t,c]=_.useState(!1);return e.jsx(m,{open:t,onOpenChange:c,className:"group",style:{marginLeft:d*5},children:r.children&&r.children.length>0?e.jsxs("div",{children:[e.jsx(o,{children:e.jsxs(h,{className:"flex items-center gap-1",children:[e.jsx(p,{className:"h-4 w-4 transition-transform group-data-[state=open]:rotate-90"}),e.jsx("p",{style:{fontWeight:r.source_id==="222"?"bold":"lighter"},children:r.name})]})}),e.jsx(o,{children:r.children.map(n=>e.jsx(s,{children:n.children&&n.children.length>0?e.jsx(i,{treeNode:n,depth:d+1}):e.jsxs("div",{className:"flex items-center gap-2",style:{marginLeft:(d+1)*5},children:[n.metadata?.image_url&&e.jsx("img",{src:n.metadata.image_url,className:"h-6 w-6"}),e.jsx("p",{style:{fontWeight:"lighter"},children:n.name})]})},n.node_id))})]}):e.jsx(s,{children:e.jsxs("p",{style:{marginLeft:d*5},children:[" ",r.name]})})})}i.__docgenInfo={description:"",methods:[],displayName:"ChildrenLevel",props:{treeNode:{required:!0,tsType:{name:"TreeNode"},description:""},depth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};function l(){const r=[{node_id:1,graph_id:1,source_id:"123",name:"$Root$",children:[{node_id:2,graph_id:2,source_id:"222",name:"Food & Beverages",children:[{node_id:3,graph_id:3,source_id:"321",name:"Fresh Produce",children:[{node_id:0xa5cf2a08e458,graph_id:0xa5cf2a08e458,source_id:"dsalkhaslkdjhasdlk",name:"Fruits",metadata:{key:"123",image_url:"https://cdn-icons-png.flaticon.com/128/3137/3137044.png"}},{node_id:9182409182999,graph_id:9182409182999,source_id:"99128310298318391jkasjdj",name:"Vegetables",metadata:{key:"123",image_url:"https://cdn-icons-png.flaticon.com/128/3137/3137044.png"}}]},{node_id:4,graph_id:4,source_id:"333",name:"Dairy",children:[{node_id:1782390712,graph_id:1782390712,source_id:"nlkkkasdj9qwe9",name:"Milk"},{node_id:9099182391283,graph_id:9099182391283,source_id:"asdasdffffasdasd",name:"Cheese"}]}]},{node_id:102,graph_id:102,source_id:"222",name:"Household",children:[{node_id:33123123,graph_id:33123123,source_id:"asdjaskdjaksd",name:"none",children:[{node_id:9998989899998,graph_id:9998989899998,source_id:"lllllkasodl",name:"Cleaning Supplies"},{node_id:9900090898,graph_id:9900090898,source_id:"nnnnnnjaklsdjhnaskdj",name:"Paper Product"}]}]}]}];return e.jsx("div",{className:"flex flex-col justify-center min-h-1 m-5",children:r.map(d=>e.jsx(i,{treeNode:d,depth:0},d.node_id))})}l.__docgenInfo={description:"",methods:[],displayName:"TaxonomyTree"};const C={title:"Example/TaxonomyTree",component:l,parameters:{docs:{source:{code:g,language:"tsx",type:"code"}}}},a={};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};const v=["TaxonomyTreeCode"];export{a as TaxonomyTreeCode,v as __namedExportsOrder,C as default};
