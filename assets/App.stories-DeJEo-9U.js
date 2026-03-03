import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as x,b as T,T as S}from"./db-B3lqZL-g.js";import{T as N}from"./ToolBar-BEPBRNLp.js";import{r as t}from"./iframe-DOE9zQDk.js";import{S as b}from"./SideBar-DHiM6MB6.js";import"./index-B9oVnICJ.js";import"./ChildrenLevel-CDDXI64E.js";import"./scroll-area-ikOl81J3.js";import"./index-BRRwjKX1.js";import"./index-CKC94nx8.js";import"./index-C4ZdvhJs.js";import"./preload-helper-B_lI8Z-o.js";import"./InfoRow-Dy5jMV-F.js";function a(){const[o,r]=t.useState(!0),[i,p]=t.useState(""),[n,d]=t.useState([]),[l,m]=t.useState(!0),[c,u]=t.useState();return t.useEffect(()=>{Promise.resolve(x).then(f=>{d(T(f)),m(!1)})},[]),e.jsxs("main",{className:"flex justify-between h-screen w-12/12",children:[e.jsxs("div",{className:"w-10/12",children:[e.jsx(N,{setExpand:r,expand:o,setValue:p}),e.jsx(S,{isLoading:l,expand:o,value:i,tree:n,setNode:u})]}),e.jsx("div",{className:"w-6/12",children:e.jsx(b,{node:c})})]})}a.__docgenInfo={description:"",methods:[],displayName:"App"};const g=`import './globals.css'
import { TaxonomyTree } from './components/TaxonomyTree.tsx';
import { ToolBar } from './components/ToolBar.tsx';
import { useState, useEffect } from 'react';
import { SideBar } from './components/SideBar.tsx';
import { buildTree, type ApiResponse } from '@/utils/buildTree';
import type { TreeNode } from '@/interface/interface';
import dbData from '@/utils/db.json';

function App() {
  const [collapse, setCollapse] = useState(true);
  const [value, setValue] = useState("");
  const [treeData, setTreeData] = useState<TreeNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<TreeNode | undefined>();


  useEffect(() => {
    Promise.resolve(dbData as ApiResponse).then(data => {
      setTreeData(buildTree(data));
      setIsLoading(false);
    });
  }, []);

  return (
    <main className='flex justify-between h-screen w-12/12'>
      <div className='w-10/12'>
        <ToolBar setExpand={setCollapse} expand={collapse} setValue={setValue} />
        <TaxonomyTree isLoading={isLoading} expand={collapse} value={value} tree={treeData} setNode={setSelectedNode} />
      </div>
      <div className='w-6/12'>
        <SideBar node={selectedNode} />
      </div>
    </main>
  )
}

export default App
`,V={title:"Example",component:a,parameters:{docs:{source:{code:g,language:"tsx",type:"code"}}}},s={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};const _=["PrincipalAppExample"];export{s as PrincipalAppExample,_ as __namedExportsOrder,V as default};
