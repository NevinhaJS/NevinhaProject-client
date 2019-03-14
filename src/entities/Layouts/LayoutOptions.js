import React from 'react';

import LayoutSampleBox from '../../components/LayoutSampleBox';
import {LayoutSample, LayoutSampleText} from './style';

export default ({
    clickFn,
    label,
    navigation,
    layout,
    rightScreen,
    value,
    drawer,
    children
}) => (
    <LayoutSample onClick={clickFn}>
        <LayoutSampleBox 
            selected={layout === value} 
            navigation={navigation}
            rightScreen={rightScreen}
            drawer={drawer}
        >
            {children}
        </LayoutSampleBox>

        <LayoutSampleText centered primary={layout === value}>{label}</LayoutSampleText>
    </LayoutSample>
);