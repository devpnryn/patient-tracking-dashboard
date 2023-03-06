import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
// import { makeStyles } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: '50px',
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img src="/logo.png" alt="Logo" className={classes.logo} />
        <div className={classes.title}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
        <Avatar className={classes.avatar}>A</Avatar>
        <span style={{ marginLeft: '8px' }}>Admin</span>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
