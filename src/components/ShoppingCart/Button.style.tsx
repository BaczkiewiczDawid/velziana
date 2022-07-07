import styled from "styled-components";

export const StyledButton = styled.button`
  width: 90vw;
  padding: 1rem;
  background-color: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 1rem 4rem;
  }
`;
