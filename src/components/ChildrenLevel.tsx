import type { TreeNode } from "@/interface/interface";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";


export function ChildrenLevel({ treeNode, depth = 1 }: { treeNode: TreeNode, depth?: number }) {
    const [openChildren, setOpenChildren] = useState(true);

    return (
        <Collapsible open={openChildren} onOpenChange={setOpenChildren} className="group" style={{ marginLeft: depth * 5 }}>
            {treeNode.children && treeNode.children.length > 0 ?
                <div>
                    <ScrollArea>
                        <CollapsibleTrigger className="flex items-center gap-1">
                            <ChevronRightIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
                            <p>
                                {treeNode.name}</p>
                        </CollapsibleTrigger>
                    </ScrollArea>
                    <ScrollArea>
                        {
                            treeNode.children.map(c => (
                                <CollapsibleContent key={c.node_id}>
                                    {c.children && c.children.length > 0 ?
                                        <ChildrenLevel treeNode={c} depth={depth + 1} /> :
                                        <div className="flex items-center gap-2" style={{ marginLeft: (depth + 1) * 5 }}>
                                            {c.metadata?.image_url && <img src={c.metadata.image_url} className="size-4" />}
                                            <p>{c.name}</p>
                                        </div>
                                    }
                                </CollapsibleContent>
                            ))
                        }
                    </ScrollArea>
                </div>
                :
                <CollapsibleContent>
                    <p style={{ marginLeft: depth * 5 }}> {treeNode.name}</p>
                </CollapsibleContent>
            }
        </Collapsible >
    )
}