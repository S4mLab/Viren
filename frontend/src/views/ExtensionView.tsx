import React from 'react';
import { Grid } from '@mui/material';
import Dialog from 'components/Dialog';
import Graph from 'components/Graph';
import responses from '../mockResponse.json';

const ExtensionView = () => {
    return (
        <Grid container spacing={2}>
            <Dialog responses={responses} />
            <Graph responses={responses} />
        </Grid>
    );
};

export default ExtensionView;
