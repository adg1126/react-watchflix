import React from 'react';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
import { PhoneIphone, TabletMac, DesktopWindows, Tv } from '@material-ui/icons';

const cardContents = [
  {
    title: 'WatchFlix Mobile',
    monthlyPrice: 3,
    videoQuality: 'Good',
    resolution: '480p',
    devices: [
      {
        icon: <PhoneIphone style={{ fill: 'grey' }} />,
        text: 'phone'
      },
      { icon: <TabletMac style={{ fill: 'grey' }} />, text: 'tablet' }
    ]
  },
  {
    title: 'WatchFlix Basic',
    monthlyPrice: 7,
    videoQuality: 'Good',
    resolution: '480p',
    devices: [
      { icon: <PhoneIphone style={{ fill: 'grey' }} />, text: 'phone' },
      { icon: <TabletMac style={{ fill: 'grey' }} />, text: 'tablet' },
      { icon: <DesktopWindows style={{ fill: 'grey' }} />, text: 'Computer' },
      { icon: <Tv style={{ fill: 'grey' }} />, text: 'Tv' }
    ]
  },
  {
    title: 'WatchFlix Standard',
    monthlyPrice: 10,
    videoQuality: 'Better',
    resolution: '1080p',
    devices: [
      { icon: <PhoneIphone style={{ fill: 'grey' }} />, text: 'phone' },
      { icon: <TabletMac style={{ fill: 'grey' }} />, text: 'tablet' },
      { icon: <DesktopWindows style={{ fill: 'grey' }} />, text: 'Computer' },
      { icon: <Tv style={{ fill: 'grey' }} />, text: 'Tv' }
    ]
  },
  {
    title: 'WatchFlix Premium',
    monthlyPrice: 11,
    videoQuality: 'Best',
    resolution: '4K+HDR',
    devices: [
      { icon: <PhoneIphone style={{ fill: '#fff' }} />, text: 'phone' },
      { icon: <TabletMac style={{ fill: '#fff' }} />, text: 'tablet' },
      { icon: <DesktopWindows style={{ fill: '#fff' }} />, text: 'Computer' },
      { icon: <Tv style={{ fill: '#fff' }} />, text: 'Tv' }
    ]
  }
];

const useStyles = makeStyles(theme => ({
  container: { width: '100vw' },
  rowContainer: {
    width: '80%',
    marginTop: '8em',
    [theme.breakpoints.down('sm')]: { width: '95%', marginTop: '2em' },
    [theme.breakpoints.down('xs')]: { marginTop: '3em' }
  },
  fontWhite: { color: '#fff' },
  fontGrey: {
    color: '#fff',
    fontWeight: '400',
    opacity: '0.8'
  },
  title: { fontSize: '1.1em', fontWeight: 'bold' },
  avatar: {
    marginRight: '0.3em',
    padding: '0.3em',
    fontSize: '2.2em',
    backgroundColor: theme.palette.primary.main,
    opacity: '0.8'
  },
  button: {
    ...theme.button,
    ...theme.buttonRedAnimation,
    textDecoration: 'none',
    fontSize: '1.05em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em'
    }
  },
  card: {
    padding: '0.5 0em',
    background: 'rgba(10, 10, 10, 1)'
  }
}));

export default function Profile({ currentUser, signOutStart }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickSignout = () => signOutStart();

  const renderCard = ({
    title,
    monthlyPrice,
    videoQuality,
    resolution,
    devices
  }) => (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction='column' alignItems='center' spacing={1}>
          <Grid item>
            <Typography
              variant='body1'
              className={[classes.title, classes.fontWhite].join(' ')}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction='row'
            justifyContent='center'
            spacing={1}
          >
            <Grid item>
              <Typography variant='body1' className={classes.fontGrey}>
                Video Quality:{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.fontGrey}>
                {videoQuality}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction='row'
            justifyContent='center'
            spacing={1}
          >
            <Grid item>
              <Typography variant='body1' className={classes.fontGrey}>
                Resolution:{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.fontGrey}>
                {resolution}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction='row'
            justifyContent='center'
            spacing={1}
          >
            <Grid item>
              <Typography variant='body1' className={classes.fontGrey}>
                Devices you can use to watch:{' '}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              justifyContent='center'
              spacing={1}
            >
              {devices.map(({ icon, text }, i) => (
                <Grid item key={i}>
                  {icon}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              className={[classes.title, classes.fontGrey].join(' ')}
            >
              {`$ ${monthlyPrice}`}
            </Typography>
          </Grid>
          <Grid item style={{ margin: '1em 0' }}>
            <Button className={classes.button}>SUBSSCRIBE</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Grid container direction='column' alignItems='center' spacing={8}>
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        className={classes.rowContainer}
      >
        <Grid item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Avatar alt={currentUser.displayName} className={classes.avatar}>
              {currentUser.displayName[0]}
            </Avatar>
            <Typography
              variant={matchesSM ? 'h5' : 'h4'}
              className={classes.fontWhite}
            >
              {currentUser.displayName}
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Button onClick={handleClickSignout} className={classes.button}>
            SIGN OUT
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          variant={matchesSM ? 'h5' : 'h4'}
          className={classes.fontWhite}
        >
          Manage your subscriptions
        </Typography>
      </Grid>
      <Grid item container direction='row' justifyContent='center' spacing={2}>
        {cardContents.map((c, i) => (
          <Grid item key={i}>
            {renderCard({ ...c })}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
