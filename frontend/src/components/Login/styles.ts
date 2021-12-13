import styled from "styled-components";
import PatternImg from "../../assets/img/pattern_login.svg";

export const ContainerAuth = styled.div`
  flex: 8;
  display: flex;
`;
export const AsideContainer = styled.aside`
  flex: 5;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 35px;
  min-height: 100vh;
  height: auto;
  background-image: url(${PatternImg}),
    linear-gradient(135deg, #bc4cf7, #bc4cf7);
`;
export const MainContainer = styled.main`
  flex: 7;
  padding: 50px 32px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    padding: 45px 30px;
  }
`;
export const TextAside = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

export const SubAside = styled.h4`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;
