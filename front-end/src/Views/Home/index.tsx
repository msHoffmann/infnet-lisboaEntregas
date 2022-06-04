import styled from 'styled-components';
import React from 'react';
import { Container } from 'react-bootstrap';
import bgMobile from "../../assets/img/lisboa-entregas-bg-mobile.jpg";
import bgDesktop from "../../assets/img/lisboa-entregas-bg.jpg";
import bgDesktop2 from "../../assets/img/lisboa-entregas-bg-desktop.jpg";
import bgIpad from "../../assets/img/lisboa-entregas-bg-ipad.jpg";
import { CustomButton } from '../../Components/CustomButton';
import { LinkContainer } from 'react-router-bootstrap';

export function HomeView() {
  return (
    <Banner className="vh-100">
      <Container className="h-100 d-flex flex-column justify-content-between">
        <div className="mt-auto">
          <Title className="text-white">Lisboa Entregas</Title>
          <Teste className="text-white">Pequenas e Grandes Mudanças</Teste>
        </div>
        <div className="mt-auto pb-5 d-flex flex-column align-items-center">
          <CustomButton loading variant="warning" size="lg">Cadastro</CustomButton>
          <CustomButton variant="warning" size="lg">Login</CustomButton>
        </div>
        <div className="d-flex flex-column gap-2">
        <Oi2 className="w-100">ogdsfgsdfgi</Oi2>
        <Oi className="w-100">osdfgsdfgi</Oi>
        </div>
      </Container>
    </Banner>
  )
}

const Oi = styled.button`
  background: linear-gradient(90deg, #ffc107 70%, rgba(217, 217, 217, 0) 70%);
  border: none;
`

const Oi2 = styled.button`
  background: linear-gradient(90deg, rgba(217, 217, 217, 0) 30%, #ffc107 30%);
  border: none;
`

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
`

const Title = styled.h1`
text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
font-size: 10rem;
line-height: 0.9;
margin-bottom: 25px;
@media (min-width: 375px) {
  font-size: 4rem;
}
@media (min-width: 375px) {
  font-size: 6rem;
}
@media (min-width: 810px) {
  font-size: 10rem;
}
`

const Teste = styled.h1`
  text-align: right;
@media (min-width: 375px) {
  font-size: 1rem;
}
@media (min-width: 810px) {
  font-size: 2.5rem;
}
`

const Title2 = styled.h1`
text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
font-size: 2rem;
text-align: right;
padding-top: 20px;
`
