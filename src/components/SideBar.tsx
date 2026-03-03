import type { TreeNode } from "@/interface/interface";
import { InfoRow } from "./InfoRow";
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function SideBar({ node }: { node: TreeNode | undefined }) {
  return (
    <div className="w-12/12 h-12/12 p-5 text-foreground">
      <ScrollArea className="h-12/12 w-12/12 rounded-md border p-4">
        <header className="flex flex-col h-auto">
          <h2 className="font-bold text-2xl">Node Properties</h2>
          {
            node ?
              <div className="flex flex-col mb-3">
                <Badge variant="default">ID: {node?.node_id ?? "-."}</Badge>
                <p className="capitalize ml-1">
                  Name: {node?.name ?? "-."}
                </p>
              </div>
              : ""
          }
        </header>
        <hr />
        <main>
          {node ?
            <div>
              <InfoRow label={"Name"} data={node.name} isImg={false} />
              <Separator />
              <InfoRow label={"Source"} data={node.source_id} isImg={false} />
              <Separator />
              <InfoRow label={"Graph ID"} data={node.graph_id} isImg={false} />
              <Separator />
              <InfoRow label={"Image"} data={node.metadata?.image_url} isImg={true} />
              <Separator />
              <p className="capitalize font-semibold">Metadata: </p>
              <div className="bg-amber-50 p-10 rounded-sm text-sm overflow-auto">
                {node.metadata?.primary && <pre>{JSON.stringify(node.metadata?.primary, null, 2)}</pre>}
              </div>

            </div>
            :
            <div className="flex justify-center items-center h-200 text-3xl">
              <p className=" w-6/12 text-center size-40 border-2 outline border-double flex justify-center items-center m-2 my-8 mx-3">Select a node in the tree to view its properties</p>
            </div>
          }
        </main>
      </ScrollArea>
    </div>
  )
}


