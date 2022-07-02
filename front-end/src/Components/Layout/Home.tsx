import React from 'react';
import Menu from "../../assets/img/menu.jpg"
import Car from "../../assets/img/carros.svg"
import Download from "../../assets/img/download.svg"
import styled from 'styled-components';
import { Container } from 'react-bootstrap';


export function Home() {
    return (
        <>
        <Container className="vw-100 p-xl-0">
                <h1 className="text-center p-3">Escolha o seu veículo</h1>
                <p className="text-center">A Lisboa Entregas pega sua mudança e leva até onde você precisa. Temos os melhores motoristas parceiros. Empacote suas caixas e vamos a mudança!</p>
        </Container>
            <DivStyled>
                <CarStyled src={Car} alt="Carros" />
                <h1 className="text-center p-3">E nós fazemos o resto!</h1>
                <ImageStyled src={Menu} alt="Menu" />
                <DownloadStyled src={Download} alt="Download" />
            </DivStyled>
        </>
                                    
    )

}
const DivStyled = styled.div`
  width: 100%;
  text-align: center;
`
const ImageStyled = styled.img`
    width: 100%;
    height: auto;     
`
const DownloadStyled = styled.img`
    width: 100%;
    height: auto; 
`

const CarStyled = styled.img`
    width: 813px;
    height: 271px;
`
