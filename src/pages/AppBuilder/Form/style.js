import styled from 'styled-components';

const getProps = ({column, row, centered}) => {
    let props = "";

    if(column) {
        props += `
            display: flex;
            flex-direction: row;
        `;
    }else if(row) {
        props += `
            display: flex;
            flex-direction: column;
        `;

        if(centered) {
            props += `
                align-items: center;
            `;
        }
    }
    

    return props;
};

const FormTitle = styled.h3`
    margin: 0;
`;

const Field = styled.div`
    width: ${({width}) => width ? width : '100%'};
    padding: 0 10px;

    ${props => getProps(props)}
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: 'space-between';
    flex-wrap: wrap;
`;

const FormHeader = styled.header`
    margin: .8rem 0;
`;

export {
    Field,
    FormContainer,
    FormHeader,
    FormTitle
}