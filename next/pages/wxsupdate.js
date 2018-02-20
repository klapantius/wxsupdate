import React, { Component } from 'react';
import WxsToolbar from '../components/wxsToolbar';
import ChangesetArea from '../components/changesetArea';
import WxsUpdateResultArea from '../components/wxsUpdateResultArea';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

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
      hideAutos: false,
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
    console.log(`selectedRows: ${JSON.stringify(selectedRows)}`)
    const selectedCS = this.state.changesets[selectedRows[0]].id;
    let updated = [...this.state.selectedRows];
    const idx = updated.findIndex(e => e == selectedCS);
    if (idx >= 0) updated.splice(idx, 1);
    else updated.push(selectedCS);
    console.log(`selected: ${selectedCS} updated: ${JSON.stringify(updated)}`);
    this.setState({
      selectedRows: updated,
      queryDisabled: updated.length < 1
    });
  }

  handleToggleHideAutos(event, isInputChecked) {
    this.setState({ ...this.state, hideAutos: isInputChecked });
    console.log(`now ${isInputChecked}`)
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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <WxsToolbar
            modules={this.state.modules}
            value={this.state.module}
            handleChange={(e, i, v) => this.handleModuleChange(e, i, v)}
            handleToggleHideAutos={(e, i) => this.handleToggleHideAutos(e, i)}
          />
          <ChangesetArea
            changesets={this.state.changesets}
            selectedRows={this.state.selectedRows}
            handleSelection={(s) => this.handleChangesetSelection(s)}
            hideAutos={this.state.hideAutos}
          />
          <WxsUpdateResultArea
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
