import React from 'react';
import GeneratePalette from "./colorHelpers"
import {Route,Switch} from "react-router-dom";
import Palette from './Palette';
import seedColors from './seedColors';

class App extends React.Component {
  findPalette(id){
    return seedColors.find(palette=>  palette.id === id)
  }
  render() {
    return (
      <Switch>
    <Route exact path="/" render={() => <h1>Palette List goes here</h1> } />
    <Route exact path="/palette/:id" render={(routeProps)=><Palette palette={GeneratePalette(this.findPalette(routeProps.match.params.id))} />} />
        </Switch>
      
      // <div>
      //   <Palette palette={GeneratePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
