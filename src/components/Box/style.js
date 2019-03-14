import styled from 'styled-components';

const getProps = ({pdBottom, mainNav, rounded, info}) => {
    let str = '';

    if(pdBottom) {
        str += 'padding-bottom: 0;'
    }

    if(mainNav) {
        str += 'border-top-left-radius: 4px;';
    }

    if(rounded) {
        str += 'border-radius: 4px;';
    }

    if(info) {
        str += 'color: #fff;'
    }

    return str;
}

const Wrapper = styled.div`
    padding: 1rem;
    background: ${({theme}) => theme.colors.bgBlue};

    ${(props) => getProps(props)}
`;

export {
    Wrapper
}