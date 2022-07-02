import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import bgMobile from "../../assets/img/lisboa-entregas-bg-mobile.jpg";
import bgDesktop from "../../assets/img/lisboa-entregas-bg.jpg";
import bgDesktop2 from "../../assets/img/teste-lisboa-entregas-bg-desktop.jpg";
import bgIpad from "../../assets/img/lisboa-entregas-bg-ipad.jpg";
import { Layout } from "../../Components/Layout";
import { Home } from "../../Components/Layout/Home";

export function HomeView() {
  return (
    <Layout>
      <Banner className="vh-100">
        <Container className="w-90 h-100 d-flex flex-column justify-content-between">
          <DivStyled>
            <TitleStyled>
              Lisboa<br></br>Entregas
            </TitleStyled>
            <Teste>Pequenas e Grandes Mudanças</Teste>
          </DivStyled>
        </Container>
      </Banner>
      <Home />
    </Layout>
  );
}


const DivStyled = styled.div`
  width: fit-content;
  margin-top: 280px;
  @media (min-width: 428px) {
    margin-top: 400px;
  }
  @media (min-width: 810px) {
    margin-top: 450px;
  }
  @media (min-width: 811px) {
    margin-top: 200px;
  }
`;

const Banner = styled.div`
  background: url(${bgMobile}) no-repeat center center;
  background-size: cover;
  @media (min-width: 576px) {
    background-image: url(${bgDesktop});
  }
  @media (min-width: 810px) {
    background-image: url(${bgIpad});
  }
  @media (min-width: 992px) {
    background-image: url(${bgDesktop});
  }
  @media (min-width: 1600px) {
    background-image: url(${bgDesktop2});
  }
`;

const TitleStyled = styled.h1`
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: rgba(0, 51, 153, 1);
  font-size: 1rem;
  line-height: 0.9;
  margin-bottom: 30px;
  @media (min-width: 375px) {
    font-size: 4.5rem;
  }
  @media (min-width: 810px) {
    font-size: 8rem;
  }
`;

const Teste = styled.h1`
  color: rgba(0, 51, 153, 1);
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: right;
  @media (min-width: 375px) {
    font-size: 1rem;
  }
  @media (min-width: 810px) {
    font-size: 2rem;
  }
`;

// const Title2 = styled.h1`
// text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
// font-size: 2rem;
// text-align: right;
// padding-top: 20px;
// @media (min-width: 810px) {
//   font-size: 4rem;
// }
// `

/* const Oi = styled(Button)`
  background: linear-gradient(90deg, #FFFF00 70%, rgba(217, 217, 217, 0) 70%);
  border: none;
  :hover{
    background: linear-gradient(90deg, #e0e09c 70%, rgba(217, 217, 217, 0) 70%);
  }
`

const Oi2 = styled(Button)`
  background: linear-gradient(90deg, rgba(217, 217, 217, 0) 30%, #FFFF00 30%);
  border: none;
  :hover{
    background: linear-gradient(90deg, rgba(217, 217, 217, 0) 30%, #e0e09c 30%);
  }
` */
