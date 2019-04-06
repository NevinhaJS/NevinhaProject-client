import React, { Component } from 'react';

import {Wrapper, NavigationItem} from './style';

class WrapperComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <Wrapper>
                {/* <NavigationItem exact to="/" activeClassName="active">Layout</NavigationItem>
                <NavigationItem exact activeClassName="active" to="asd">Page Builder</NavigationItem> */}

                {this.props.children}
            </Wrapper>
        )
    }
}

export default WrapperComponent;
