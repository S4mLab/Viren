import { Grid, Paper } from '@mui/material';
import React, { FC } from 'react';
import Topic from './Topic';


const Dialog= ({ responses }) => {
    const mainTopic = Object.keys(responses);
    return (
        <Grid item xs={4}>
            <Paper elevation={3} sx={{ mt: 4, ml: 4, px: 2, py: 4, height: '80vh', overflowY: 'scroll' }}>
                {mainTopic.map((main) => (
                    <Topic key={main} mainTheme={main} relatedTopics={responses[main]} />
                ))}
            </Paper>
        </Grid>
    );
};

export default Dialog;