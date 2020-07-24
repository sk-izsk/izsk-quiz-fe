import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaBriefcaseMedical, FaHospitalSymbol } from 'react-icons/fa';
import { FcAbout, FcGlobe, FcHome } from 'react-icons/fc';
import { GiDeathZone } from 'react-icons/gi';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Drawer } from '..';
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
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    to: '/home',
    icon: <FcHome size={25} />,
  },
  {
    name: 'Countries',
    to: '/countries',
    icon: <FcGlobe size={25} />,
  },
  {
    name: 'Confirmed',
    to: '/confirmed',
    icon: <FaHospitalSymbol size={25} color={theme.palette.primary.light} />,
  },
  {
    name: 'New cases',
    to: '/new-cases',
    icon: <FaBriefcaseMedical size={25} color={theme.palette.success.main} />,
  },
  {
    name: 'Recovered',
    to: '/recovered',
    icon: <AiOutlineSafety size={25} color={theme.palette.success.light} />,
  },
  {
    name: 'Deaths',
    to: '/deaths',
    icon: <GiDeathZone size={25} color={theme.palette.error.main} />,
  },
  {
    name: 'About',
    to: '/about',
    icon: <FcAbout size={25} />,
  },
];

const NavBar: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

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
      <Drawer open={open} handleDrawer={handleDrawer} menuItems={menuItems} />
    </div>
  );
};

export { NavBar };
