import React, { Component, Fragment } from 'react';
import {ThemeProvider} from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Header from './components/AppHeader';
import Wrapper from './components/Wrapper';

import theme from './static/styles/theme';
import GlobalStyle from './static/styles/global';
import {customMaterialTheme} from './static/styles/material-ui';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />

        <MuiThemeProvider theme={customMaterialTheme}>
          <CssBaseline />

          <ThemeProvider theme={theme}>
            <Fragment>

              <Header />

              <Wrapper>
                <Routes />
              </Wrapper>

            </Fragment>
          </ThemeProvider>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
