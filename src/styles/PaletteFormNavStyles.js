import { DRAWER_WIDTH } from '../constants';
import sizes from './size';

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: { display: 'flex' },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hide: {
    display: 'none',
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
    marginLeft: 12,
    marginRight: 20,
  },
  NavBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
    [sizes.down('xs')]: {
      marginRight: '0.5rem',
    },
  },
  button: {
    margin: '0 .5rem',
  },
  [sizes.down('xs')]: {
    margin: 0,
    padding: '0',
  },
});

export default styles;
