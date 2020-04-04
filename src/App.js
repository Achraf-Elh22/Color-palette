import React from 'react';
import GeneratePalette from "./colorHelpers"
import Palette from './Palette';
import seedColors from './seedColors';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={GeneratePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
