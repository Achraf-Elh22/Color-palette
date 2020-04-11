import React, { Component } from 'react';

import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = { format: "hex" }
    this.handleChange = this.handleChange.bind(this)
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1)
  }

  handleChange(val) {
    this.setState({ format: val });
  }
  render() {
    const { paletteName, emoji } = this.props.palette;
    const { format } = this.state
    const colorBoxes = this._shades.map(color => <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />)
    return (
      <div className='Palette'>
        <NavBar handleChange={this.handleChange} showingAllColor={false} />
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
