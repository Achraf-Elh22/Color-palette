import chroma from 'chroma-js';
import sizes from './size';
export default {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s',
    },

    [sizes.down('lg')]: {
      width: '25%',
      height: (props) => (props.showingFullPalette ? '20%' : '33.33333%'),
    },
    [sizes.down('md')]: {
      width: '50%',
      height: (props) => (props.showingFullPalette ? '10%' : '20%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props) => (props.showingFullPalette ? '5%' : '10%'),
    },
  },

  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    width: '60px',
    height: '30px',
    position: 'absolute',
    bottom: '0',
    right: '0',
    textAlign: 'center',
    lineHeight: '30px',
    border: 'none',
    textTransform: 'uppercase',
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-15px',
    marginLeft: '-50px',
    display: 'inline-block',
    textAlign: 'center',
    outline: 'none',
    lineHeight: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: '0',
  },
  boxContent: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '10px',
    color: '#000',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '1',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6 ease-in-out',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },
  copyMsg: {
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      padding: '1rem',
      textTransform: 'uppercase',
      marginBottom: '0',
      [sizes.down('xs')]: { fontSize: '5rem' },
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: ' 100',
    },
  },

  showMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
};
