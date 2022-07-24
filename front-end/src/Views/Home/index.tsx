import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import bgMobile from "../../assets/img/lisboa-entregas-bg-mobile.jpg";
import bgDesktop from "../../assets/img/lisboa-entregas-bg-desktop.jpg";
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
            <Subtitle>Pequenas e Grandes Mudanças</Subtitle>
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
`;

const TitleStyled = styled.h1`
  text-shadow: 2px 2px 0px rgba(245, 242, 242, 0.911);
  color: rgba(0, 51, 153, 1);
  font-size: 1rem;
  line-height: 0.9;
  margin-bottom: 30px;
  @media (min-width: 375px) {
    font-size: 4.5rem;
    margin-bottom: 20px;
  }
  @media (min-width: 810px) {
    font-size: 8rem;
  }
  @media (min-width: 811px) {
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 31px;
  }
`;

const Subtitle = styled.h1`
  color: rgba(0, 51, 153, 1);
  text-shadow: 1px 1px 0px rgba(245, 242, 242, 0.911);
  text-align: right;
  @media (min-width: 375px) {
    font-size: 1.1rem;
  }
  @media (min-width: 810px) {
    font-size: 2rem;
  }
`;

