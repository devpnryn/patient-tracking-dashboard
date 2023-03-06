import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Avatar } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

function MyAppBar_v2() {
    const [setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    function handleSearchClick() {
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current.focus(), 100);
    }

    function handleSearchClose() {
        setIsSearchOpen(false);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Hamburger menu */}
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                {/* Logo */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Your Logo
                </Typography>

                {/* Search field with search icon */}
                {/* Search field with search icon */}
                <div sx={{
                    flexGrow: 1,
                    ml: 2,
                    borderRadius: 50,
                    backgroundColor: 'common.white',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <SearchIcon sx={{ color: 'action.active', mx: 1 }} onClick={handleSearchClick} />
                    <InputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            ml: 1,
                            flexGrow: 1,
                            '& input': {
                                '&::placeholder': {
                                    color: 'action.active'
                                }
                            },
                        }}
                        onBlur={handleSearchClose}
                        inputRef={searchInputRef}
                    />
                </div>
                {/* User profile */}
                <Avatar alt="Consultant" src="/consultant-avatar.png" sx={{ ml: 2 }} />
            </Toolbar>
        </AppBar>
    );
}
export default MyAppBar_v2;