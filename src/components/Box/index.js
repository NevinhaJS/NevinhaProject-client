import React from 'react';
import {Wrapper} from './style';

export default ({children, ...otherProps}) => { 
    return (
       <Wrapper {...otherProps}>
            {children}
        </Wrapper>
    )
}