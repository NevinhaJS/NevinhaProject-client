import styled from 'styled-components';

const Text = styled.p`
    margin: ${({margin}) => margin ? margin : '16px 0'};
`;

export {
    Text
}