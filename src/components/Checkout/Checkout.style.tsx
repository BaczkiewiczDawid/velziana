import styled from "styled-components";

type CheckoutProps = {
    secondary: boolean;
}

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;

  label {
    margin-top: 2rem;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    width: 65vw;
    margin-left: 30vw;
  }
`;

export const Input = styled.input<CheckoutProps>`
  width: 80vw;
  margin-top: .5rem;
  margin-bottom : ${props => props.secondary ? '3rem' : '0'};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.4rem;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};

    input {
        margin-top: 1rem;
    }

    select {
        margin-top: 1rem;
        margin-bottom: 4rem;
    }
`;