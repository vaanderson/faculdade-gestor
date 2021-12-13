import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      --primary: #bc4cf7;
      --secondary: #8704cb;
      --thirdy: #d687ff;
      
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        font-family: 'Poppins', sans-serif;
    }
    html{
        -webkit-font-smoothing: antialiased;
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }
    body{
        background-color: #f5f7fb;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-weight: 400;
    }
    a {
        color: inherit; 
        text-decoration: inherit;  
    }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
  `;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1190px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;

  margin: 10px;
  padding: 10px;
  max-width: 13rem;
  @media screen and (max-width: 768px) {
    min-width: 100%;
    width: 100%;
    margin: 10px 0;
  }
`;
export const Space = styled.br``;
