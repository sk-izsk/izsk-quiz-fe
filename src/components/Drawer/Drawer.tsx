import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { MenuItem } from '../NavBar/NavBar';

export interface DrawerProps {
  open?: boolean;
  handleDrawer?: () => void;
  menuItems: MenuItem[];
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: CustomTheme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const Drawer: React.FC<DrawerProps> = ({ open, handleDrawer, menuItems }) => {
  const classes = useStyles();
  return (
    <MuiDrawer
      className={classes.drawer}
      variant='temporary'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClose={handleDrawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawer}>
          {theme.direction === 'ltr' ? <FiChevronsLeft /> : <FiChevronsRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map((menuItem: MenuItem) => (
          <Link className={classes.link} to={menuItem.to} key={menuItem.name} onClick={handleDrawer}>
            <ListItem button>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </MuiDrawer>
  );
};

export { Drawer };
