import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Avatar,
    Menu,
    MenuItem,
    Switch,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const styles = {
    search: {
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: '#f2f2f2',
        marginRight: '10px',
        marginLeft: 'auto',
        width: '50%',
        '@media screen and (max-width: 600px)': {
            width: '70%',
        },
        '@media screen and (max-width: 400px)': {
            width: '100%',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: '10px',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em)`,
        transition: 'width 0.5s',
        width: '100%',
        color: 'inherit',
    },
};

const AppbarV2 = ({ toggleTheme, isDarkMode }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);

    const handleMenuClose = () => setAnchorEl(null);

    const handleSearchInputChange = (event) =>
        setSearchInput(event.target.value);

    const handleThemeToggle = () => {
        toggleTheme();
    };

    return (
        <AppBar position="fixed" top="0">
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Patient Tracker
                </Typography>
                <div sx={styles.search}>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: styles.inputRoot,
                            input: styles.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <Switch
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                    color="default"
                    icon={<Brightness7Icon />}
                    checkedIcon={<Brightness4Icon />}
                />
                <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
                    <Avatar />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default AppbarV2;
