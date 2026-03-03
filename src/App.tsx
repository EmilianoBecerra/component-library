import './globals.css'
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
