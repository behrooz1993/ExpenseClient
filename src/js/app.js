import React from 'react';
import ReactDOM from 'react-dom';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import AppRouter from './components/AppRouter';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const App = () => (
    //Make complete theme dark
    // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    //   <AppRouter />
    // </MuiThemeProvider>

    <MuiThemeProvider muiTheme={muiTheme}>
       <AppRouter />
    </MuiThemeProvider>
  );

ReactDOM.render(<App/>,document.getElementById('app'));