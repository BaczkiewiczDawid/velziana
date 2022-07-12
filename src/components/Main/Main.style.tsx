import styled from "styled-components";

export type MainType = {
  isOpen: boolean;
};

export const Wrapper = styled.div<MainType>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99999;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10rem;

  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    margin-top: 4rem;
    width: 90vw;
  }

  @media screen and (min-width: 768px) {
    input {
      width: 60vw;
    }
  }
`;