import React, { Component } from 'react';

import Box from '../Box';
import {Wrapper, Navigation, NavigationItem, ContentWrapper} from './style';

class WrapperComponent extends Component {
    render() {
        return (
            <Wrapper>
                <Box pdBottom="0" mainNav>
                    <Navigation>
                        <li>
                            <NavigationItem href="#" active>Layout</NavigationItem>
                        </li>
                        <li>
                            <NavigationItem href="#">Screens</NavigationItem>
                        </li>
                        <li>
                            <NavigationItem href="#">Page Builder</NavigationItem>
                        </li>
                    </Navigation>
                </Box>

                <ContentWrapper>
                    {this.props.children}
                </ContentWrapper>
            </Wrapper>
        )
    }
}

export default WrapperComponent;
