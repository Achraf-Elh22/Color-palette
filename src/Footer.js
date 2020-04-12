import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  PaletteFooter: {
    background: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: '500',
  },

  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem',
  },
};

function Footer(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}> {emoji} </span>
    </footer>
  );
}

export default withStyles(styles)(Footer);
