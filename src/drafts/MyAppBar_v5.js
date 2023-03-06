import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";

const styles = {
    search: {
        position: "relative",
        borderRadius: "20px",
        backgroundColor: "#f2f2f2",
        marginRight: "10px",
        marginLeft: "auto",
        width: "50%",
        "@media screen and (max-width: 600px)": {
            width: "70%",
        },
        "@media screen and (max-width: 400px)": {
            width: "100%",
        },
    },
    searchIcon: {
        padding: "10px",
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: "10px",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${30}px)`,
        transition: "width 0.5s",
        width: "100%",
    },
};

const MyAppBar_v5 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Patient Tracker
                </Typography>
                <div style={styles.search}>
                    <div style={styles.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: styles.inputRoot,
                            input: styles.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
                    <Avatar />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar_v5;
