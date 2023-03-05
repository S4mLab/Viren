import React from "react";
import { render } from "react-dom";
import { Grid } from "@mui/material";
import Graph from 'react-graph-vis';
const SingleMindMap= ({ mainTheme, relatedTopics }) => {
    relatedTopics.filter((item) => item.id !== 0).push({ id: 0, label: mainTheme });
    const modifiedEdges = [];
    relatedTopics.forEach((topic) => {
        modifiedEdges.push({ from: topic.id, to: 0 });
    });
    const options = {
        edges: {
            color: 'red',
        },
        height: '400px',
    };

    const graph = {
        nodes: relatedTopics,
        edges: modifiedEdges,
    };
    return <Graph graph={graph} options={options} />;
};
export default function CustomMindMap (props) {
    const mainTopic = Object.keys(responses);
    const {responses } = props;
    return (
        <Grid item xs={8}>
        {mainTopic.map((main) => (
           <SingleMindMap key={main} mainTheme={main} relatedTopics={responses[main]} />
            ))}
        </Grid>
    );
}