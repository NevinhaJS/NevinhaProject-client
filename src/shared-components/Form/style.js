import {Input, FormControl, InputLabel, Select, Switch, OutlinedInput} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const NevinhaLabel = withStyles(({palette}) => ({
    root: {
        color: palette.common.white
    },
}))(InputLabel);

const StyledInput = withStyles(({palette}) => ({
    root: {
        color: palette.common.white
    }
}))(Input);

const NevinhaOutlinedInput = withStyles(({palette}) => ({
    input: {
        color: palette.common.white
    }
}))(OutlinedInput)

const CustomFormControl = withStyles({
    root: {
        width: '100%'
    }
})(FormControl);

const NevinhaSelect = withStyles(({palette}) => ({
    root: {
        color: palette.common.white,
    },
    icon: {
        fill: palette.common.white
    }
}))(Select);

const NevinhaFormControl = styled(CustomFormControl)`
    fieldset[class*="MuiPrivateNotchedOutline-root"] {
        border-color: ${({theme}) => theme.colors.light};
    }

    &:hover fieldset[class*="MuiPrivateNotchedOutline-root"] {
        border-color: ${({theme}) => theme.colors.light}!important;
    }
`;

const NevinhaSwitch = withStyles(({palette}) => ({
    bar: {
        background: palette.primary.main
    }
}))(Switch);

const SwitchContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: row;
`;

export {
    SwitchContainer,
    StyledInput,
    NevinhaLabel,
    NevinhaFormControl,
    NevinhaSelect,
    NevinhaSwitch,
    NevinhaOutlinedInput
}