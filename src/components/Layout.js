import styled from 'styled-components';

const getRowProps = ({bordered, theme}) => {
    let str = '';

    if(bordered) {
        str += `
            padding-bottom: 1rem;
            margin-bottom: 1.4rem;
            border-bottom: solid 1px ${theme.colors.mediumLight};
        `;
    }

    return str;
}

const Row = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'row'};
    flex-wrap:  ${({wrap}) => wrap ? wrap : 'wrap'};
    align-items: ${({alignment}) => alignment ? alignment : 'flex-start'};
    justify-content: ${({justify}) => justify ? justify : 'flex-start'};

    ${props => getRowProps(props)};
`;

export {
    Row
}