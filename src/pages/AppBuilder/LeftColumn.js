import React, {Fragment} from 'react';

import Accordion from '../../shared-components/Accordion';
import Screens from '../../shared-components/Screens';
import Components from '../../shared-components/Components';
import {LeftColumn} from './style';

export default ({screens}) => (
    <LeftColumn>
        <Accordion>
            {({ expanded, handleChange, classes }) => (
                <Fragment>
                    <Screens 
                        expanded={expanded}
                        handleChange={handleChange}
                        classes={classes}
                        screens={screens}
                    />
                    <Components 
                        expanded={expanded}
                        handleChange={handleChange}
                        classes={classes}
                    />
                </Fragment>
            )}
        </Accordion>
    </LeftColumn>
);