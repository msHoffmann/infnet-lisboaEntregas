
import { Layout } from "../../Components/Layout";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Frania from "../../assets/img/frania.svg"

export function HoffmannView () {
    return(
        <Layout>
            <Container>
                <Teste className="flex-column pb-2">
                    <p>Olá! Meu nome é Frania Hoffmann.</p>
                    <ImageStyled src={Frania} alt="Frania Hoffmann" />
                    <p>Bem-vindo ao meu Terceiro Projeto como Programadora.</p>
                    <p>Entre em contacto comigo:<a href = "mailto: franiahoffmann@gmail.com"> E-mail</a></p>
                </Teste>
            </Container>
        </Layout>
    )
}

const Teste = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
`

const ImageStyled = styled.img`
    width: 20%;
    height: 50%;
    margin-bottom: 20px;
`