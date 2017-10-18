import React, { Component } from 'react';
import './App.css';
import ModuleSelector from './moduleSelector';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';


const muiTheme = getMuiTheme({

});

class App extends Component {

  render() {
    const style = {
      margin: 12,
    };

    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          {/* <header className="App-header">
            <h1 className="App-title">under construction</h1>
          </header> */}
          <ModuleSelector />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
