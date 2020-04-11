import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GeneratePalette from './colorHelpers';

import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';

class App extends React.Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={GeneratePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={() => <SingleColorPalette />}
        />
      </Switch>

      // <div>
      //   <Palette palette={GeneratePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
