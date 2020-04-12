import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';

import './Palette.css';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  PaletteColors: {
    height: '90%',
  },

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

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  handleChange(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <NavBar
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
          level={this.state.level}
          showingAllColors
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
