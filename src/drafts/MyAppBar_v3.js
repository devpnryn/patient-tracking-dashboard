import React from 'react';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

const styles = {
    appBar: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    search: {
        borderRadius: '999px',
        backgroundColor: alpha('#ffffff', 0.15),
        '&:hover': {
            backgroundColor: alpha('#ffffff', 0.25),
        },
        marginLeft: 0,
        width: 'auto',
        minWidth: '250px',
        '@media (minWidth:600px)': {
            width: 'auto',
            minWidth: '350px',
        },
    },
    searchIcon: {
        padding: '0 16px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: '12px 12px 12px 0',
        paddingLeft: `calc(1em + ${16}px)`,
        transition: 'width 300ms ease-in-out',
        width: '100%',
    },
    avatar: {
        marginLeft: '16px',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
};

export default function MyAppBar_v3() {
    return (
        <AppBar position="static" style={styles.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={styles.title}>
                    Patient Tracking
                </Typography>
                <div style={styles.center}>
                    <div style={styles.search}>
                        <div style={styles.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={styles.inputInput}
                        />
                    </div>
                    <Avatar
                        alt="Consultant"
                        src="https://picsum.photos/200/300"
                        sx={styles.avatar}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}