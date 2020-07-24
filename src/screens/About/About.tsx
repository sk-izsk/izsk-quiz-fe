import { Avatar, Box, ListItem, ListItemIcon, ListItemText, makeStyles, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import ParticlesBg from 'particles-bg';
import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface AboutProps {}

interface SocialDetail {
  name: string;
  link: string;
  icon: JSX.Element;
  color: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: theme.spacing(10),
  },
  largeMobile: {
    marginTop: theme.spacing(8),
  },
  listText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
}));

const bgAnimationStyles: string[] = ['color', 'fountain', 'list'];

const socialDetails: SocialDetail[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/skizsk/',
    icon: <FaLinkedin color='#0e76a8' size={30} />,
    color: '#0e76a8',
  },
  {
    name: 'Github',
    link: 'https://github.com/sk-izsk',
    icon: <FaGithub color='#7DBBE6' size={30} />,
    color: '#7DBBE6',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/Sk.iZsk/',
    icon: <FaFacebook color='#1877F2' size={30} />,
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sk_izsk/',
    icon: <FaInstagram color='#E1306C' size={30} />,
    color: '#E1306C',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/sk_izsk',
    icon: <FaTelegram color='#0088CC' size={30} />,
    color: '#0088CC',
  },
  {
    name: 'Portfolio',
    link: 'https://izsk.netlify.app',
    icon: <MdWeb color='#61DBFB' size={30} />,
    color: '#61DBFB',
  },
  {
    name: 'Email',
    link: 'mailto:sk.zeeshan1992@gmail.com',
    icon: <AiTwotoneMail color='#ff5722' size={30} />,
    color: '#ff5722',
  },
];

const About: React.FC<AboutProps> = () => {
  const classes = useStyles();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box className={classes.mainContainer}>
      <ParticlesBg type={bgAnimationStyles[Math.round(Math.random() * 3)] as any} bg={true} />
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          className={clsx([classes.large, isMobile && classes.largeMobile])}
          src='https://lh3.googleusercontent.com/pw/ACtC-3epfH7nv1M0gjlxBPvjEuzVhub4UxRHhjAQXJoj32Q9-N6q6b0m8GX49RkVZCaDcXk4CjofoCgH-AabzYJ_cs8oSET1qfdHKtj98MKtx1v4dpndoBmvskb6Mlb6-fravD4EDkvQggGuFv8-_ccNRtcgFA=w912-h861-no'
          alt='about'
        />
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {socialDetails.map((socialDetail: SocialDetail) => {
            return (
              <ListItem onClick={() => window.open(socialDetail.link, '_blank')} key={socialDetail.name} button>
                <ListItemIcon>{socialDetail.icon}</ListItemIcon>
                <ListItemText className={classes.listText} color={socialDetail.color} primary={socialDetail.name} />
              </ListItem>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
