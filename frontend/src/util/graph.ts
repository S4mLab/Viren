/* eslint-disable no-param-reassign */
import { RelatedTopic, Response } from 'interfaces/general';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
// eslint-disable-next-line import/prefer-default-export
export const generateGraphContent = (responses: Response) => {
    const mainTopic = Object.keys(responses);
    const graphs: { nodes: RelatedTopic[]; edges: { from: number; to: number }[] }[] = [];

    mainTopic.forEach((topic) => {
        const respectiveColor = getRandomColor();
        const correspondingRelatedTopics = responses[topic].map((item) => ({ ...item, color: respectiveColor, opacity: '1%' }));
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

    graphs.forEach((graph) => {
        combinedGraph.nodes.push(...graph.nodes);
        combinedGraph.edges.push(...graph.edges);
    });

    console.log({ combinedGraph });

    return combinedGraph;
};

export {};
