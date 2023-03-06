import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        // backgroundColor: '#f5f5f5',
        backgroundColorL: '#424242',
        padding: '10px',
        textAlign: 'center',
    },
};

const Footer_v2 = () => {
    return (
        <Box sx={styles.footer}>
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} My App
            </Typography>
        </Box>
    );
};

export default Footer_v2;
