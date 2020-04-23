import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';

import styles from './styles/MiniPaletteStyles.js';

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.delteIcon = this.delteIcon.bind(this);
  }
  delteIcon(e) {
    e.stopPropagation();
    this.props.removePalette(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColors}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={this.delteIcon}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
