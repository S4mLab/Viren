import { TopicProps } from 'interfaces/general';
import React, { FC } from 'react';
import Graph from 'react-graph-vis';

const SingleMindMap: FC<TopicProps> = ({ mainTheme, relatedTopics }) => {
    relatedTopics.filter((item) => item.id !== 0).push({ id: 0, label: mainTheme });
    console.log({ relatedTopics });
    const modifiedEdges: { from: number; to: number }[] = [];
    relatedTopics.forEach((topic) => {
        modifiedEdges.push({ from: topic.id, to: 0 });
    });
    const options = {
        edges: {
            color: 'red',
        },
        height: '400px',
    };

    console.log({ modifiedEdges });
    const graph = {
        nodes: relatedTopics,
        edges: modifiedEdges,
    };
    return <Graph graph={graph} options={options} />;
};

export default SingleMindMap;
