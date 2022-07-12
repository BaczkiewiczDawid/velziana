import { useState, useEffect } from "react";
import { Wrapper, Content } from 'components/Main/Main.style';

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
