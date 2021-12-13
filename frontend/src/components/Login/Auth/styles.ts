import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
`;

export const GroupLogo = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

export const LogoForm = styled.h1`
  color: #121e48;
  opacity: 0.8;
  margin-top: 2rem;
`;

export const Diviser = styled.span`
  width: 100px;
  height: 0.3rem;
  background-color: #bc4cf7;
  position: absolute;
  margin-left: -3rem;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  color: #121e48;
  border: 1px solid rgba(18, 30, 72, 0.1);
  ::-webkit-input-placeholder {
    /* Edge */
    color: rgba(18, 30, 72, 0.3);
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(18, 30, 72, 0.3);
  }

  ::placeholder {
    color: rgba(18, 30, 72, 0.3);
  }

  :focus {
    border-color: rgba(188, 76, 247, 0.35);
    box-shadow: 0 0 0 1px #bc4cf7, 0 0 3px 1px rgb(188 76 247 / 55%),
      inset 0 0 3px 0 rgb(188 76 247 / 55%);
    -webkit-box-shadow: 0 0 0 1px #bc4cf7, 0 0 3px 1px rgb(188 76 247 / 55%),
      inset 0 0 3px 0 rgb(188 76 247 / 55%);
  }
`;
export const ButtonSubmit = styled.button`
  background: linear-gradient(135deg, #bc4cf7, #bc4cf7);
  padding: 1rem;
  border-radius: 0.3rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(135deg, #722e97, #bc4cf7);
    transition: all 0.3s;
  }
`;
