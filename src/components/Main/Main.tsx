import { useState, useEffect } from "react";
import styled from "styled-components";

type MainType = {
  isOpen: boolean;
};

const Wrapper = styled.div<MainType>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99999;
  justify-content: center;
`;

const Content = styled.div`
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

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("currentUser") !== null) {
            setIsOpen(false);
        }
    }, [])

  const handleSubmit = (e: any) => {
    if (e.keyCode === 13) {
      localStorage.setItem("currentUser", e.target.value);
      setIsOpen(false);
    }
  };

  console.log(isOpen)

  return (
    <Wrapper isOpen={isOpen}>
      <Content>
        <h1>Welcome to Velziana</h1>
        <input
          type="text"
          placeholder="Enter Your name..."
          onKeyDown={(e) => handleSubmit(e)}
        />
      </Content>
    </Wrapper>
  );
};

export default Main;
