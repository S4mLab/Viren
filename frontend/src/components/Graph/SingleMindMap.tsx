import { TopicProps } from 'interfaces/general';
import React, { FC } from 'react';
import Graph from 'react-graph-vis';

const SingleMindMap: FC<TopicProps> = ({ mainTheme, relatedTopics }) => {
    const removedThemeArr = relatedTopics.filter((item) => item.id !== 0);
    removedThemeArr.push({ id: 0, label: mainTheme });
    const options = {
        height: '600px',
        layout: {
            hierarchical: false,
        },
        nodes: {
            shape: 'box',
            widthConstraint: 100,
        },
    };

    const graph = {
        nodes: removedThemeArr,
        // edges: modifiedEdges,
    };
    return <Graph graph={graph} options={options} />;
};

export default SingleMindMap;
