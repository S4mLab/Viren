import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Response } from 'interfaces/general';
import { generateGraphContent } from 'util/graph';
import Graph from 'react-graph-vis';

interface CanvasProps {
    responses: Response;
}
const Canvas: FC<CanvasProps> = ({ responses }) => {
    const options = {
        height: '100%',
        nodes: {
            shape: 'box',
            widthConstraint: 100,
        },
        physics: {
            barnesHut: {
                avoidOverlap: 0.2,
            },
        },
    };
    const graphs = generateGraphContent(responses);

    return (
        <Grid item xs={8}>
            <Graph graph={graphs} options={options} />
        </Grid>
    );
};

export default Canvas;
