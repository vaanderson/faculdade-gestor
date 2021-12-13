import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";
import {
  ButtonSubmit,
  Diviser,
  Form,
  Input,
  LogoForm,
  GroupLogo,
} from "./styles";

export function FormAuth() {
  const context = useContext(AuthContext);

  const handleLogin = (event: any) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      senha: event.target.senha.value,
    };
    context.Login(data);
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <GroupLogo>
          <LogoForm> Entrar </LogoForm>
          <Diviser />
        </GroupLogo>

        <Input placeholder="E-mail" name="email" type="email" />
        <Input placeholder="Senha" name="senha" type="password" />

        <ButtonSubmit>Entrar</ButtonSubmit>
      </Form>
    </>
  );
}
