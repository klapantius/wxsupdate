import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const muiTheme = getMuiTheme({});

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="juba power tools"
        />
        <Menu>
          <MenuItem primaryText=".wxs impact calculation" href="/wxsupdate"/>
          <MenuItem primaryText="changeset observer" />
        </Menu>
      </MuiThemeProvider>
    );
  }
}
