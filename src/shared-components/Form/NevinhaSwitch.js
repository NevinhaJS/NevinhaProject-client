import React from 'react';
import {SwitchContainer, NevinhaSwitch} from './style';
import {Text} from '../Typograph';

export default ({label, value, checked}) => (
    <SwitchContainer column width="100%">
        <NevinhaSwitch
            checked={checked}
            value={value}
            color="primary"
        />

        <Text>{label}</Text>
    </SwitchContainer>
);