import{T as n}from"./ToolBar-Dq04RLTR.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-CjQLVfP9.js";import"./preload-helper-B_lI8Z-o.js";import"./index-FvjvVjiw.js";const t=`import { Button } from "@/components/ui/button";\r
import { Input } from "@/components/ui/input"\r
import type { ChangeEvent, Dispatch, SetStateAction } from "react";\r
\r
\r
\r
export function ToolBar({ setExpand, expand, setValue }: { setExpand: Dispatch<SetStateAction<boolean>>, expand: boolean, setValue: Dispatch<string> }) {\r
\r
    function handleClick() {\r
        setExpand(prev => !prev);\r
    }\r
\r
\r
    function handleChange(e: ChangeEvent<HTMLInputElement>) {\r
        setValue(e.target.value);\r
    }\r
\r
    return (\r
        <div className="p-3 flex gap-5">\r
            <Button onClick={handleClick}>{expand ? "Collapse All" : "Expand All"}</Button>\r
            <Input className="capitalize  w-3/12" onChange={handleChange} />\r
        </div>\r
    )\r
}`,l={title:"Example/TaxonomyTree/ToolBar",component:n,parameters:{docs:{source:{code:t,language:"tsx",type:"code"}}}},e={args:{expand:!0,setExpand:()=>{},setValue:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    expand: true,
    setExpand: () => {},
    setValue: () => {}
  }
}`,...e.parameters?.docs?.source}}};const c=["ToolBarExample"];export{e as ToolBarExample,c as __namedExportsOrder,l as default};
