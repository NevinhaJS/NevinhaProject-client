import React, {Fragment} from 'react';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

import {
    LayoutSampleBox,
    LayoutSampleAppBar,
    LayoutSampleToolbar,
    Grow
} from './style';

export default ({navigation, selected, drawer, rightScreen, children}) => (
    <LayoutSampleBox selected={selected} filled>
        <LayoutSampleAppBar position="static">
            <LayoutSampleToolbar>
                {navigation && <MenuIcon color="primary" />}

                {(!drawer && rightScreen) && (
                    <Fragment>
                        <Grow />
                        <Icon color="primary" fontSize="small">settings</Icon>
                    </Fragment>
                )}
            </LayoutSampleToolbar>
        </LayoutSampleAppBar>
        
        {children}
    </LayoutSampleBox>
)