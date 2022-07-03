import styled from 'styled-components';

export const NavLinksWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 1rem;

    a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: none;
      padding: 1rem 2rem;
    }
  }
`;