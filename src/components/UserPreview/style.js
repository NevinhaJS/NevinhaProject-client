import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';


const PreviewBox = withTheme()(styled.section`
    width: 400px;
    /* background: #142029; */
    background: ${props => props.theme.palette.background.default};
    justify-content: center;
    display: flex;
    padding-top: 1rem;
`);

const CellphoneContainer = styled.article`
    width: 320px;
    background: ${({theme}) => theme.colors.light};
    height: 560px;
    overflow: hidden;
    border: solid 13px #000;
    border-radius: 22px;
    position: sticky;
    top: 10%;
    left: 0;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 200px;
        height: 24px;
        background: #000;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        margin-left: -100px;
    }
`;

export {
    PreviewBox,
    CellphoneContainer
}