import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Response } from 'interfaces/general';
import SingleMindMap from './SingleMindMap';

interface CanvasProps {
    responses: Response;
}
const Canvas: FC<CanvasProps> = ({ responses }) => {
    const mainTopic = Object.keys(responses);
    return (
        <Grid item xs={8}>
            {mainTopic.map((main) => (
                <SingleMindMap key={main} mainTheme={main} relatedTopics={responses[main]} />
            ))}
        </Grid>
    );
};

export default Canvas;
