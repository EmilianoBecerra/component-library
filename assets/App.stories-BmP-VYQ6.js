import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as x,b as T,T as S}from"./db-DhxOdJLy.js";import{T as N}from"./ToolBar-D8XbxBhq.js";import{r as t}from"./iframe-DmFaTrW6.js";import{S as b}from"./SideBar-DVPPk3fa.js";import"./index-DYaVWwIu.js";import"./ChildrenLevel-BakwH7aD.js";import"./index-BMKP67xU.js";import"./index-U_ESzbnS.js";import"./preload-helper-B_lI8Z-o.js";import"./InfoRow-Dy5jMV-F.js";function a(){const[o,r]=t.useState(!0),[d,n]=t.useState(""),[i,p]=t.useState([]),[l,c]=t.useState(!0),[m,u]=t.useState();return t.useEffect(()=>{Promise.resolve(x).then(f=>{p(T(f)),c(!1)})},[]),e.jsxs("main",{className:"flex justify-between h-screen w-12/12",children:[e.jsxs("div",{className:"w-10/12 border",children:[e.jsx(N,{setExpand:r,expand:o,setValue:n}),e.jsx(S,{isLoading:l,expand:o,value:d,tree:i,setNode:u})]}),e.jsx("div",{className:"w-6/12",children:e.jsx(b,{node:m})})]})}a.__docgenInfo={description:"",methods:[],displayName:"App"};const g=`import './globals.css'
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
      <div className='w-10/12 border'>
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
`,I={title:"Example",component:a,parameters:{docs:{source:{code:g,language:"tsx",type:"code"}}}},s={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};const P=["PrincipalAppExample"];export{s as PrincipalAppExample,P as __namedExportsOrder,I as default};
