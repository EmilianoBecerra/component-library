import type { TreeNode } from "@/interface/interface";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "lucide-react";

export function ChildrenLevel({ treeNode, depth = 1, expand, value, setNode }: { treeNode: TreeNode, depth?: number, expand: boolean, value: string, setNode: (node: TreeNode) => void }) {
  const [openChildren, setOpenChildren] = useState(expand);

  useEffect(() => {
    setOpenChildren(expand);
  }, [expand]);

  const valueLowerCase = value.toLocaleLowerCase();

  return (
    <Collapsible
      open={openChildren}
      onOpenChange={setOpenChildren}
      className="group"
      style={{ marginLeft: depth * 5 }}
    >
      {treeNode.children && treeNode.children.length > 0 ?
        <div>
          <ScrollArea>
            <div className="flex">
              <CollapsibleTrigger className="flex items-center gap-1">
                <ChevronRightIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
              </CollapsibleTrigger>
              <p
                onClick={() => setNode(treeNode)}
                style={{ fontWeight: (treeNode.name.toLocaleLowerCase().includes(valueLowerCase) && valueLowerCase !== "" || treeNode.source_id.includes(valueLowerCase) && valueLowerCase !== "") ? "600" : "lighter" }}
              >
                {treeNode.name}
              </p>
            </div>
          </ScrollArea>
          <ScrollArea>
            {treeNode.children.map(c => (
              <CollapsibleContent key={c.node_id}>
                {c.children && c.children.length > 0 ?
                  <ChildrenLevel
                    treeNode={c}
                    depth={depth + 1}
                    expand={expand}
                    value={value}
                    setNode={setNode}
                  /> :
                  <div
                    className="flex items-center gap-2 hover lightHover"
                    style={{ marginLeft: (depth + 1) * 5 }}
                    onClick={() => setNode(c)}
                  >
                    {<img src={c.metadata?.image_url === undefined ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.98Dnptl8fA-9G4_A-wow8AHaHa%3Fpid%3DApi&f=1&ipt=6fdc0f3851102ba6fa73bcadb1eaf4ba2294164feafa385063d92249051bcf7a&ipo=images" : c.metadata?.image_url} className="size-5 justify-center" />}
                    <p
                      style={{ fontWeight: (c.name.toLocaleLowerCase().includes(valueLowerCase) && valueLowerCase !== "" || c.source_id.includes(valueLowerCase) && valueLowerCase !== "") ? "600" : "lighter" }}
                    >
                      {c.name}
                    </p>
                  </div>
                }
              </CollapsibleContent>
            ))}
          </ScrollArea>
        </div>
        :
        <CollapsibleContent>
          <p style={{ marginLeft: depth * 5 }}>{treeNode.name}</p>
        </CollapsibleContent>
      }
    </Collapsible>
  )
}
