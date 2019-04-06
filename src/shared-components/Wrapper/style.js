import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const Form = withStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'row'
    }
})(FormControl);

const Wrapper = styled.div``;

const Navigation = styled.ul`
    display: flex;
    padding: 0;
    margin: -8px 0 0 -16px;
    width: calc(100% + 32px);
    padding-left: 8px;
`;

const NavigationItem = styled(NavLink)`
    font-size: 1rem;
    padding: .6rem 1.4rem;
    border: solid 1px ${({theme}) => theme.colors.bgBlue};
    display: block;
    margin-right: 1rem;
    background: ${({theme}) => theme.colors.bgBlue};
    border-bottom: none;
    text-decoration: none;
    color: ${({theme}) => theme.colors.light};
    font-weight: 600;
    font-size: .9rem;
    font-family: ${({theme}) => theme.fonts.poppins};

    &.active {
        background: ${({theme}) => theme.colors.light};
        color: ${({theme}) => theme.colors.bgBlue };
    }
`;

export {
    Form,
    Wrapper,
    Navigation,
    NavigationItem
}