import {
  ModalType,
  Wrapper,
  Content,
  Timer,
} from "components/Modal/Modal.style";
import { useState } from "react";
import successIcon from "assets/images/success.svg";
import errorIcon from "assets/images/error.svg";

const Modal = ({ isSuccess, message }: ModalType) => {
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
            <p>{message}</p>
          </Content>
          <Timer isSuccess={isSuccess}></Timer>
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
