import React from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

import {NevinhaFormControl, NevinhaLabel, NevinhaSelect} from './style';

export default ({onChange, label, items, name, value}) => (
    <NevinhaFormControl variant="outlined">
        <NevinhaLabel
            htmlFor={`outlined-${name}-simple`}
        >
            {label}
        </NevinhaLabel>
        <NevinhaSelect
            value={value}
            onChange={onChange}
            input={
            <OutlinedInput
                labelWidth={(label.length * 10)}
                name={name}
                id={`outlined-${name}-simple`}
            />
            }
        >
            <MenuItem value="">
                <em>Please select one item</em>
            </MenuItem>

            {items.map(({value, label}, index) => (
                <MenuItem key={index} value={value}>{label}</MenuItem>
            ))}
        </NevinhaSelect>
    </NevinhaFormControl>
);