/* eslint-disable no-param-reassign */
import { RelatedTopic, Response } from 'interfaces/general';

const shallowColors = ['#F5B7B1', '#D7BDE2', '#D4E6F1', '#A3E4D7', '#F9E79F', '#FDEBD0'];

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * shallowColors.length);
    return shallowColors[randomIndex];
};
// eslint-disable-next-line import/prefer-default-export
export const generateGraphContent = (responses: Response) => {
    const mainTopic = Object.keys(responses);
    const graphs: { nodes: RelatedTopic[]; edges: { from: number; to: number }[] }[] = [];

    mainTopic.forEach((topic) => {
        const respectiveColor = getRandomColor();
        const correspondingRelatedTopics = responses[topic].map((item) => ({ ...item, color: respectiveColor }));
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

    return combinedGraph;
};

export {};
