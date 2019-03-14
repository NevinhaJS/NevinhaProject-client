import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const Form = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'row'
    }
})(FormControl);

const Wrapper = styled.div`
    background: ${({theme}) => theme.colors.light};
    margin-left: 2rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 4px;
`;

const Navigation = styled.ul`
    display: flex;
    padding: 0;
    margin: -8px 0 0 -16px;
    width: calc(100% + 32px);
    padding-left: 8px;
`;

const NavigationItem = styled.a`
    font-size: 1rem;
    padding: .6rem 1.4rem;
    border: solid 1px ${({theme}) => theme.colors.bgBlue};
    display: block;
    margin-right: 1rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: ${({active, theme}) => active ? theme.colors.light : theme.colors.bgBlue};
    border-bottom: none;
    text-decoration: none;
    color: ${({active, theme}) => active ? theme.colors.bgBlue : theme.colors.light};
    font-weight: 600;
    font-size: .9rem;
    font-family: ${({theme}) => theme.fonts.poppins};
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;

const EntityWrapper = styled.section`
    width: calc(100% - 400px);
    padding: 2rem;
`;

export {
    ContentWrapper,
    EntityWrapper,
    Form,
    Wrapper,
    Navigation,
    NavigationItem
}