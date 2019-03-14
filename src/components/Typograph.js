import styled from 'styled-components';

const getTextProps = ({centered}) => {
    let str = '';

    if(centered) {
        str += 'text-align: center;';
    }

    return str;
}

const Title = styled.h1`
    font-weight: 500;
`;

const DecoratedText = styled.span`
    color: ${({theme}) => theme.colors.blue};
`;

const Text = styled.p`
    color: ${({theme, primary}) => primary ? theme.colors.blue : theme.colors.dark};

    ${props => getTextProps(props)};
`;

const LightText = styled(Text)`
    font-weight: 300;
`;

export {
    DecoratedText,
    Title,
    Text,
    LightText
}