import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Index from './components/Index';

const App = () => (
    <MuiThemeProvider>
      <Index />
    </MuiThemeProvider>
  );

ReactDOM.render(<App/>,document.getElementById('app'));