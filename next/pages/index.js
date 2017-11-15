import React, { Component } from 'react';
import ModuleSelector from './moduleSelector';
import ChangesetArea from './changesetArea';
import ResultArea from './resultArea';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({

});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [
        "foundations",
        "foundations\\options\\database",
        "foundations\\options\\licensing",
        "aim",
        "findings",
        "hl7",
        "service",
        "core",
        "service\\options\\licensing",
        "workflow",
        "datastorage",
        "dicom",
        "imaging",
        "lco",
        "organizer",
        "cip",
        "itf",
      ],
      module: "foundations",
      changesets: [],
      selectedRows: [],
      lastSelectedRows: [],
      queryDisabled: true,
      progressIndicator: "hidden",
      result: [],
    };
  }

  handleModuleChange(event, index, value) {
    var updatedState = Object.assign({}, this.state, {
      module: value,
      changesets: [],
      queryDisabled: true,
      selectedRows: [],
      result: ["waiting for changesets..."],
      progressIndicator: "hidden"
    });
    this.setState(updatedState);
    console.log(`querying history for ${this.state.modules[value]}`);
    fetch(`/tf/history?module=${this.state.modules[value]}`)
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
        updatedState = Object.assign({}, this.state, {
          changesets: json.changesets,
          result: []
        });
        this.setState(updatedState);
      })
      .catch((error) => { console.log(error); });
  }

  handleChangesetSelection(selectedRows) {
    var last = selectedRows;
    if (selectedRows.length === 0) last = this.state.selectedRows;
    this.setState({
      selectedRows: selectedRows,
      lastSelectedRows: last,
      queryDisabled: selectedRows.length < 1
    });
  }

  startQuery = () => {
    var updatedState = Object.assign({}, this.state, {
      result: ["waiting for result..."],
      queryDisabled: true,
      selectedRows: this.state.lastSelectedRows,
      progressIndicator: "visible"
    });
    this.setState(updatedState);
    var css = [];
    for (var i = 0; i < this.state.lastSelectedRows.length; i++) {
      css.push(this.state.changesets[this.state.lastSelectedRows[i]].id);
    }
    var changesets = css.join();
    fetch(`/tf/wxsimpact?module=${this.state.modules[this.state.module]}&changesets=${changesets}`)
      .then((response) => {
        var contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError(`Oops, we haven't got JSON as response to the history query! We have got ${contentType}`);
      })
      .then((json) => {
        console.log(`received data as wxs impact: ${json.result}`);
        updatedState = Object.assign({}, this.state, {
          result: json.result.length > 0 ? json.result : ["no wxs impact detected"],
          queryDisabled: false,
          progressIndicator: "hidden"
        });
        this.setState(updatedState);
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    console.log(this.state.result)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <ModuleSelector
            modules={this.state.modules}
            value={this.state.module}
            handleChange={(e, i, v) => this.handleModuleChange(e, i, v)}
          />
          <ChangesetArea
            changesets={this.state.changesets}
            selectedRows={this.state.selectedRows}
            handleSelection={(s) => this.handleChangesetSelection(s)}
          />
          <ResultArea
            disabled={this.queryDisabled}
            startQuery={() => this.startQuery()}
            result={this.state.result}
            progressIndicator={this.state.progressIndicator}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
