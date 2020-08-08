import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { FcAbout, FcHome, FcIdea } from 'react-icons/fc';
import { IoMdMenu } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { RiLoginCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Drawer } from '..';
import { Account } from '../../redux/accountSlice';
import { RootState } from '../../redux/store';
import { theme } from '../../theme/muiTheme';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.warning.contrastText,
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export interface MenuItem {
  name: string;
  to: string;
  icon: JSX.Element;
  display?: boolean;
}

const menuItems: (display: boolean) => MenuItem[] = (display: boolean) => [
  {
    name: 'Login',
    to: '/login',
    icon: <RiLoginCircleLine size={25} color={theme.palette.primary.main} />,
    display: !display,
  },
  {
    name: 'Sign Up',
    to: '/sign-up',
    icon: <MdAccountCircle size={25} color={theme.palette.primary.main} />,
    display: !display,
  },
  {
    name: 'Home',
    to: '/home',
    icon: <FcHome size={25} />,
    display,
  },
  {
    name: 'Start quiz !!!',
    to: '/quiz',
    icon: <FcIdea size={25} />,
    display,
  },
  {
    name: 'Logout',
    to: '/login',
    icon: <RiLogoutCircleRLine size={25} color={theme.palette.secondary.main} />,
    display,
  },
  {
    name: 'About',
    to: '/about',
    icon: <FcAbout size={25} />,
    display: true,
  },
];

const NavBar: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const userDetails: Account = useSelector<RootState, Account>((state: RootState) => state.account);

  const handleDrawer: () => void = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color='primary'
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <IoMdMenu />
          </IconButton>
          <Typography variant='h6'>
            <Link className={classes.link} to='/'>
              iZsk Quiz
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} handleDrawer={handleDrawer} menuItems={menuItems(userDetails.isLoggedIn)} />
    </div>
  );
};

export { NavBar };
