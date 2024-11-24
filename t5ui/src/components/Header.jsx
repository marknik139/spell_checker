import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                width: '100%',
                bgcolor: 'primary.main',
                color: 'white',
                py: 2,
                px: 2,
                textAlign: 'left',
            }}
        >
            <Typography variant="h4" component="h1">
                Проверка орфографии
            </Typography>
        </Box>
    );
};

export default Header;
