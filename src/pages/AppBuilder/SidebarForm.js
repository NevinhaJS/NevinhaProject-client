import React, {Component} from 'react';

import {Sidebar} from './style';
import ScreenSettings from './Form/ScreenSettings';

class SidebarForm extends Component {
    render() {
        return (
            <Sidebar>
                <ScreenSettings />
            </Sidebar>
        )
    }
}

export default SidebarForm;