import React, { Component } from 'react';
import './App.css';
import Configuration from './configuration';
import ModuleSelector from './moduleSelector';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import RaisedButton from 'material-ui/RaisedButton';


const muiTheme = getMuiTheme({

});

class App extends Component {
  constructor() {
    super();
    this.state = {
      module: "",
      changesets: {}
    }
    this.handleModuleChange=this.handleModuleChange(this);
  }

  handleModuleChange() {
    fetch(`${Configuration.api_url}/tf/history`)
    .then(function (response) {
        var contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        }
        throw new TypeError(`Oops, we haven't got JSON as response to the history query! We have got ${contentType}`);
    })
    .then(function (json) {
        var changesets = json.changesets;
        console.log(`${changesets.length} changesets received`);
        console.log(json);
    })
    .catch(function (error) { console.log(error); });
}

  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <ModuleSelector handleChange={this.handleModuleChange} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
