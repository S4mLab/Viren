import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Viren
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
