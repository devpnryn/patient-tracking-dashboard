import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const styles = {
    footer: {
        zIndex: 9999,
        // marginTop: '80px',
        backgroundColor: '#212121',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    },
    iconButton: {
        color: '#fff',
        marginRight: '10px',
    },
};

const Footer = () => {
    return (
        <div style={styles.footer}>
            <Typography variant="caption">
                © 2023 Patient Tracker. All rights reserved.
            </Typography>
            <div>
                <IconButton
                    style={styles.iconButton}
                    component="a"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    style={styles.iconButton}
                    component="a"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Footer;
