import styled from 'styled-components';

export const ItemWrapper = styled.article`
  display: flex;

  &:nth-child(n + 2) {
    margin-top: 4rem;
  }
`;

export const Details = styled.div`
  margin-left: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    margin-top: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ImgWrapper = styled.div`
  img {
    width: 40vw;
    height: 24vh;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 17vw;
      height: 17vh;
    }
  }
`;