import styled from 'styled-components';

import Box from '../../components/Box';
import {LightText} from '../../components/Typograph';

const LayoutBox = styled(Box)`
    width: 95%;
    margin: 0 auto 2rem;
`;

const LayoutSample = styled.article`
    max-width: 150px;
    width: 100%;
    margin-right: 2rem;
    cursor: pointer;

    &:nth-child(4n+4) {
        margin-right: 0;
    }
`;

const LayoutSampleText = styled(LightText)`
    margin-top: 10px;
`;

const TabRow = styled.ul`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    margin: 0;
    border-top: solid 2px ${({theme, selected}) => selected ? theme.colors.blue : theme.colors.mediumLight};
    display: flex;
    padding: 0;

    li {
        border-left: solid 2px ${({theme, selected}) => selected ? theme.colors.blue : theme.colors.mediumLight};
    }
`;

const TabIconColumn = styled.li`
    width: 33.3%;

    &:first-child {
        border: none
    }
`;

export {
    LayoutBox,
    LayoutSample,
    LayoutSampleText,
    TabRow,
    TabIconColumn
}
