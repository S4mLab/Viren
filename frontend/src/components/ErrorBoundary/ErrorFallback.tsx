import { Box, Typography, Button } from '@mui/material';
import React from 'react';

const ErrorFallback = () => {
    const handleClick = () => {
        document.location.href = '/';
    };
    return (
        <Box display="flex" sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5" color="text.secondary" sx={{ my: 2 }}>
                Unexpected error occurred ...
            </Typography>
            <Button variant="outlined" onClick={handleClick}>
                Return to main page
            </Button>
        </Box>
    );
};

export default ErrorFallback;
