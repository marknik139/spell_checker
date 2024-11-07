import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                bgcolor: 'primary.main',
                color: 'white',
                py: 2,
                textAlign: 'center',
                mt: 'auto',
                opacity: 0.6
            }}
        >
            <Typography variant="body2">
                © 2024 Проверка орфографии. Все права защищены.
            </Typography>
        </Box>
    );
};

export default Footer;
