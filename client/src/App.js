import React, { Component } from 'react';
import './App.css';
import Configuration from './configuration';
import ModuleSelector from './moduleSelector';
import ChangesetArea from './changesetArea';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({

});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [
        "Foundations",
        "Core",
        "Imaging",
        "Dicom",
        "LCO",
        "Service",
      ],
      module: 1,
      changesets: [],
    };
  }

  handleModuleChange(event, index, value) {
    var updatedState = Object.assign({}, this.state, { module: value });
    fetch(`${Configuration.api_url}/tf/history`)
      .then((response) => {
        var contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError(`Oops, we haven't got JSON as response to the history query! We have got ${contentType}`);
      })
      .then((json) => {
        var changesets = json.changesets;
        console.log(`${changesets.length} changesets received`);
        updatedState.changesets = json.changesets;
        this.setState(updatedState);
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <ModuleSelector
            modules={this.state.modules}
            value={this.state.module}
            handleChange={(e, i, v) => this.handleModuleChange(e, i, v)}
          />
          <ChangesetArea changesets={this.state.changesets} />
        </div>
      </MuiThemeProvider>
    );
  }
}
