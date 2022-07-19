import styled from 'styled-components';

export const DishInfo = styled.div`
  margin-left: 1.5rem;

  p {
    font-weight: 300;
  }
`;

export const ImgWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const DishWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;