import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared-components/AppHeader';
import Wrapper from './shared-components/Wrapper';
import AppBuilder from './pages/AppBuilder';

const Root = () => (
    <Router>
        <Fragment>
            <Header />

            <Wrapper>
                <Route path="/" exact component={AppBuilder} />
            </Wrapper>
        </Fragment>
    </Router>
);

export default Root;