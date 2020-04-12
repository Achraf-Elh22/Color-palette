import React, { Component } from 'react';

import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';

import './Palette.css';

export default class Palette extends Component {
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
      <div className='Palette'>
        <NavBar
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
          level={this.state.level}
          showingAllColors
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
