import type { TreeNode } from '@/interface/interface';

export type ApiGraph = {
    graph_id: string;
    name: string;
    root_node_id: string;
};

export type ApiNode = {
    node_id: string;
    graph_id: number;
    source_id: string;
    name: string;
    metadata: string | Record<string, unknown> | null;
};

export type ApiLink = {
    from_node_id: string;
    to_node_id: string;
};

export type ApiResponse = {
    graph: ApiGraph;
    node: ApiNode[];
    links: ApiLink[];
};

function parseMetadata(metadata: string | Record<string, unknown> | null): TreeNode['metadata'] {
    if (!metadata) return undefined;
    if (typeof metadata === 'object') {
        const { 'image-url': imageUrl, ...rest } = metadata;
        return { ...rest, ...(imageUrl ? { image_url: imageUrl as string } : {}) } as TreeNode['metadata'];
    }
    try {
        return JSON.parse(metadata) as TreeNode['metadata'];
    } catch {
        return undefined;
    }
}

function buildNode(
    nodeId: string,
    sourceId: string,
    name: string,
    graphId: number,
    metadata: string | Record<string, unknown> | null,
    links: ApiLink[],
    nodeMap: Map<string, ApiNode>,
    ancestors: Set<string>
): TreeNode {
    const newAncestors = new Set(ancestors);
    newAncestors.add(nodeId);

    const children: TreeNode[] = links
        .filter(l => l.from_node_id === nodeId && !ancestors.has(l.to_node_id))
        .map(link => {
            const child = nodeMap.get(link.to_node_id);
            if (!child) return null;
            return buildNode(
                child.node_id,
                child.source_id,
                child.name,
                child.graph_id,
                child.metadata,
                links,
                nodeMap,
                newAncestors
            );
        })
        .filter((n): n is TreeNode => n !== null);

    const parsedMetadata = parseMetadata(metadata);

    return {
        node_id: nodeId,
        graph_id: graphId,
        source_id: sourceId,
        name,
        metadata: parsedMetadata,
        children: children.length > 0 ? children : undefined,
    };
}

export function buildTree(data: ApiResponse): TreeNode[] {
    const { graph, node, links } = data;

    const nodeMap = new Map<string, ApiNode>(node.map(n => [n.node_id, n]));

    const root = buildNode(
        graph.root_node_id,
        '$ROOT$',
        graph.name,
        parseInt(graph.graph_id),
        null,
        links,
        nodeMap,
        new Set()
    );

    return [root];
}
