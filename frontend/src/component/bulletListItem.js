import { Box, Typography } from '@mui/material';
import React from 'react';

const Topic= ({ mainTheme, relatedTopics }) => {
    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={600} sx={{ textDecoration: 'underline' }}>
                {mainTheme}
            </Typography>
            <ul>
                {relatedTopics.map((topic) => (
                    <li key={topic.id}>
                        <Typography variant="subtitle1">{topic.label}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default Topic;