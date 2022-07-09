import styled, { keyframes } from "styled-components";

export type ModalType = {
  isSuccess: boolean;
  message?: string,
};

export const timingAnimation = keyframes`
      0% {
          width: 100%;
      }
  
      100% {
          width: 0;
      }
  `;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 16rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
`;

export const Content = styled.div<ModalType>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  color: ${(props) =>
    props.isSuccess ? props.theme.colors.green : props.theme.colors.red};

  p {
    margin-left: 1rem;
  }
`;

export const Timer = styled.div<ModalType>`
  width: 100%;
  height: 0.3rem;
  background-color: ${(props) =>
    props.isSuccess ? props.theme.colors.green : props.theme.colors.red};
  position: absolute;
  bottom: 0;
  animation: ${timingAnimation} 2.5s linear;
`;
