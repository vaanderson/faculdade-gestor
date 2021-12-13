import { FormAuth } from "./Auth/Index";
import {
  AsideContainer,
  MainContainer,
  ContainerAuth,
  TextAside,
  SubAside,
} from "./styles";

export function LoginComponent() {
  return (
    <ContainerAuth>
      <AsideContainer>
        <TextAside>Olá, bem-vindo(a)!</TextAside>
        <SubAside>
          Informe o seu e-mail e senha <br /> para entrar na plataforma.
        </SubAside>
      </AsideContainer>

      <MainContainer>
        <FormAuth />
      </MainContainer>
    </ContainerAuth>
  );
}
