import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar, AppBar} from '@material-ui/core';

const getLayoutBoxProps = ({filled}) =>{
    let str = '';

    if(filled) {
        str += `
            .MuiAppBar-colorPrimary-23 {
                background: transparent!important;
            }
        `;
    }

    return str;
}

const LayoutSampleBox = styled.div`
    border: solid 2px ${({theme, selected}) => selected ? '#0082f3' : theme.colors.mediumLight};
    min-height: 262px;
    width: 100%;
    position: relative;

    ${props => getLayoutBoxProps(props)};
`;

const LayoutSampleAppBar = withStyles({
    root: {
        boxShadow: 'none'
    }
})(AppBar);

const LayoutSampleToolbar = withStyles({
    root: {
        padding: '0 10px',
        minHeight: '38px'
    }
})(Toolbar);

const Grow = styled.div`
    flex-grow: 1;
`;

export {
    LayoutSampleBox,
    LayoutSampleToolbar,
    LayoutSampleAppBar,
    Grow
}