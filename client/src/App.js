import React, { Component } from 'react';
import './App.css';
import Configuration from './configuration';
import ModuleSelector from './moduleSelector';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import RaisedButton from 'material-ui/RaisedButton';


const muiTheme = getMuiTheme({

});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
      changesets: [],
    };
    //this.handleModuleChange = this.handleModuleChange(this);
    console.log(`constructor of App finished, this.state: ${JSON.stringify(this.state)}`);
  }

  handleModuleChange(event, index, value) {
    console.log(`handling module change, requesting history for module #${value}`);
    var newState = Object.assign({}, this.state, { module: value });
    console.log(`alternating ${JSON.stringify(this.state)} --> ${JSON.stringify(newState)}`);
    this.setState(newState);
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
          <ModuleSelector value={this.state.module} handleChange={(e, i, v) => this.handleModuleChange(e, i, v)} />
        </MuiThemeProvider>
      </div>
    );
  }
}

//export default App;
