import styled from 'styled-components';

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.red};
    background-color: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25vw;

    img {
        width: 1.4rem;
    }
`;