import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import type { ChangeEvent, Dispatch, SetStateAction } from "react";



export function ToolBar({ setExpand, expand, setValue }: { setExpand: Dispatch<SetStateAction<boolean>>, expand: boolean, setValue: Dispatch<string> }) {

  function handleClick() {
    setExpand(prev => !prev);
  }


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="pt-6 pl-6 flex gap-5">
      <Button onClick={handleClick}>{expand ? "Collapse All" : "Expand All"}</Button>
      <Input className="capitalize  w-12/12" onChange={handleChange} />
    </div>
  )
}