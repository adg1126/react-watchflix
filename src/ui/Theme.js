import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

const breakpoints = createBreakpoints({ ...customBreakpointValues });

// Shades of grey
const white = 'rgb(246, 247, 249)',
  grey600 = '#93a5be',
  grey900 = '#4a5073',
  black = '#111';

// Color Scheme
const mainIndigo = '#021F38',
  lightIndigo = '#5885af',
  highlightedIndigo = '#669df6',
  red = '#e50914',
  green = '#008000';

export default createTheme({
  palette: {
    common: {
      white,
      grey600,
      grey900,
      black,
      highlightedIndigo,
      red,
      green
    },
    primary: {
      main: red
    },
    secondary: {
      main: mainIndigo,
      light: lightIndigo
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(',')
  },
  button: {
    borderRadius: '30px',
    padding: '0.3em 1em',
    [breakpoints.down('sm')]: {
      padding: '0.5em 1.8em'
    }
  },
  buttonIndigoAnimation: {
    position: 'relative',
    color: mainIndigo,
    border: `1px solid ${mainIndigo}`,
    zIndex: 1,
    '&:hover': {
      color: 'white',
      border: `1px solid ${mainIndigo}`
    },
    '&::before': {
      borderRadius: '30px',
      content: '""',
      position: 'absolute',
      background: mainIndigo,
      bottom: 0,
      left: 0,
      right: 0,
      top: '100%',
      zIndex: '-1',
      transition: 'top 0.2s ease-in'
    },
    '&:hover::before': {
      top: 0
    }
  },
  buttonGreenAnimation: {
    position: 'relative',
    color: green,
    border: `1px solid ${green}`,
    zIndex: 1,
    '&:hover': {
      color: white,
      border: `1px solid ${green}`
    },
    '&::before': {
      borderRadius: '30px',
      content: '""',
      position: 'absolute',
      background: green,
      bottom: 0,
      left: 0,
      right: 0,
      top: '100%',
      zIndex: '-1',
      transition: 'top 0.2s ease-in'
    },
    '&:hover::before': {
      top: 0
    }
  },
  buttonGreyAnimation: {
    position: 'relative',
    color: grey900,
    border: `1px solid ${grey600}`,
    zIndex: 1,
    '&:hover': {
      color: white,
      border: `1px solid ${grey600}`
    },
    '&::before': {
      borderRadius: '30px',
      content: '""',
      position: 'absolute',
      background: grey600,
      bottom: 0,
      left: 0,
      right: 0,
      top: '100%',
      zIndex: '-1',
      transition: 'top 0.2s ease-in'
    },
    '&:hover::before': {
      top: 0
    }
  },
  buttonRedAnimation: {
    position: 'relative',
    color: red,
    border: `1px solid ${red}`,
    zIndex: 1,
    '&:hover': {
      color: white,
      border: `1px solid ${red}`
    },
    '&::before': {
      borderRadius: '30px',
      content: '""',
      position: 'absolute',
      background: red,
      bottom: 0,
      left: 0,
      right: 0,
      top: '100%',
      zIndex: '-1',
      transition: 'top 0.2s ease-in'
    },
    '&:hover::before': {
      top: 0
    }
  }
});
