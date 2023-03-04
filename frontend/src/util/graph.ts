/* eslint-disable no-param-reassign */
import { RelatedTopic, Response } from 'interfaces/general';

// eslint-disable-next-line import/prefer-default-export
export const generateGraphContent = (responses: Response) => {
    const mainTopic = Object.keys(responses);
    const graphs: { nodes: RelatedTopic[]; edges: { from: number; to: number }[] }[] = [];

    mainTopic.forEach((topic) => {
        const correspondingRelatedTopics = responses[topic];
        const correspondingTopicId = correspondingRelatedTopics.find((item) => item.isMainTopic)?.id;
        const modifiedEdges: { from: number; to: number }[] = [];

        correspondingRelatedTopics.forEach((subTopic) => {
            if (correspondingTopicId !== undefined && subTopic.id !== correspondingTopicId) {
                modifiedEdges.push({ to: subTopic.id, from: correspondingTopicId });
            }
        });

        const singleGraphContent = { nodes: correspondingRelatedTopics, edges: modifiedEdges };
        graphs.push(singleGraphContent);
    });

    const combinedGraph = {
        nodes: [] as RelatedTopic[],
        edges: [] as { from: number; to: number }[],
    };
    // const xOffset = 200; // Adjust the horizontal distance between the graphs
    // const yOffset = 0; // Adjust the vertical distance between the graphs

    // const network = new vis.Network(null, null, options);

    // graphs.forEach((graph) => {
    //     network.setData(graph);

    //     const minX = Math.min(...network.getPositions(Object.keys(graph.nodes)).map((pos: { x: any }) => pos.x));
    //     const minY = Math.min(...network.getPositions(Object.keys(graph.nodes)).map((pos: { y: any }) => pos.y));

    //     graph.nodes.forEach((node) => {
    //         const { x, y } = network.getPositions(node.id)[node.id];
    //         node.x = x - minX + (graph === graphs[1] ? xOffset : 0);
    //         node.y = y - minY + yOffset;
    //     });

    //     combinedGraph.nodes.push(...graph.nodes);
    //     combinedGraph.edges.push(...graph.edges);
    // });

    // network.destroy();

    graphs.forEach((graph) => {
        combinedGraph.nodes.push(...graph.nodes);
        combinedGraph.edges.push(...graph.edges);
    });

    return combinedGraph;
};

export {};
