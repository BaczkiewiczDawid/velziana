import styled, { keyframes } from "styled-components";
import { useState } from "react";
import successIcon from "assets/images/success.svg";
import errorIcon from "assets/images/error.svg";

type ModalType = {
  isSuccess: boolean;
};

const timingAnimation = keyframes`
    0% {
        width: 100%;
    }

    100% {
        width: 0;
    }
`;

const Wrapper = styled.div`
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

const Content = styled.div<ModalType>`
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

const Timer = styled.div<ModalType>`
  width: 100%;
  height: 0.3rem;
  background-color: ${(props) =>
    props.isSuccess ? props.theme.colors.green : props.theme.colors.red};
  position: absolute;
  bottom: 0;
  animation: ${timingAnimation} 2.5s linear;
`;

const Modal = ({ isSuccess }: ModalType) => {
  const [isOpen, setIsOpen] = useState(true);

  const hideModal = () => {
    setInterval(() => {
      setIsOpen(false);
    }, 2480);
  };

  hideModal();

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Content isSuccess={isSuccess}>
            <img src={isSuccess ? successIcon : errorIcon} alt="" />
            <p>Cant add more than 3 dishes</p>
          </Content>
          <Timer isSuccess={isSuccess}></Timer>
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
