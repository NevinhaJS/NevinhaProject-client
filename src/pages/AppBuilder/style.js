import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Sidebar = styled.aside`
    width: 100%;
    margin-top: 2rem;
    max-width: 400px;
    border: solid 2px #184b93;
    border-radius: 6px;
    flex: 1;
    padding: 1rem;
    margin-right: 2rem;
`;

const LeftColumn = styled(Sidebar)`
    max-width: 200px;
    margin-left: 2rem;
    border: none;
    margin-right: 0;
`;

export {
    Container,
    LeftColumn,
    Sidebar
}
