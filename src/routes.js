import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LayoutEntity from './entities/Layouts';
import Screens from './entities/Screens';

const Root = () => (
    <Router>
        <Fragment>
            <Route path="/" exact component={LayoutEntity} />
            <Route path="/screens" component={Screens} />
        </Fragment>
    </Router>
);

export default Root;