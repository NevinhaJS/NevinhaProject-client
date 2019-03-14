import styled from 'styled-components';

const getProps = ({active}) => {
    let str = '';

    if(active) {
        str += `
            a {
                color: #fff;
            }
        `;
    }

    return str;
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    h1 {
        margin: 0;
    }
`;

const Logo = styled.a`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    text-decoration: none;
    margin: 1rem;

    img {
        animation: App-logo-spin infinite 20s linear;
        pointer-events: none;
        margin-right: .8rem;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Nunito = styled.span`
    font-family: ${({theme}) => theme.fonts.nunito}, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.light};
`;

const Poppins = styled.span`
    font-family: ${({theme}) => theme.fonts.poppins}, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    transform: translateY(4px) translateX(2px);
    display: inline-block;
    color: #53a2e6;
`;

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.blue};
    font-size: 1rem;
    font-family: ${({theme}) => theme.fonts.nunito};
    text-decoration: none;
    font-weight: 600;
    position: relative;
    z-index: 2;

    span {
        margin-bottom: .2rem;
        font-size: 1rem;
        color: ${({theme}) => theme.colors.blue};
    }
`;

const MainNavigation = styled.ul`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.li`
    height: 72px;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: .4rem;
    transition: color .15s ease-in-out;

    &:last-child {
        margin: 0;
    }

    &:before {
        content: "";
        background: ${({theme}) => theme.colors.bgBlue};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        transition: height .15s ease-in-out;
        z-index: 1;
    }

    &:hover {
       ${getProps({active: true})}


       &:before {
            height: 100%;
        }
    }

`;

export {
    Header,
    Logo,
    NavItem,
    Nunito,
    Poppins,
    Link,
    MainNavigation
}