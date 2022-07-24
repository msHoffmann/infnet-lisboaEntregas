import React from 'react';
import { Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../store/slices/userSlice';

export function Footer() {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    return (
        <FooterStyled>
            <Container>
                <Nav className="flex-column align-items-end">
                    <Nav.Link as={Link} to='/' className="text-black">Início</Nav.Link>
                    {isUserLoggedIn ? (
                        <Nav.Link as={Link} to='/novo-pedido' className="text-black">Novo Pedido</Nav.Link>
                    ) : (
                        <>
                            <Nav.Link as={Link} to='/cadastro' className="text-black">Cadastro</Nav.Link>
                            <Nav.Link as={Link} to='/login' className="text-black">Login</Nav.Link>
                        </>
                    )}
                    <Nav.Link as={Link} to='/termos-de-uso' className="text-black">Termos de Uso</Nav.Link>
                    <Nav.Link as={Link} to='/msHoffmann' className="text-black">@msHoffmann 2022</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link href="https://www.facebook.com/frania.hoffmann" target="_blank" className="text-black">
                        <IconStyled icon={faFacebookSquare} />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/franiahoffmann/" target="_blank" className="text-black">
                        <IconStyled icon={faInstagram} />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/msHoffmann" target="_blank" className="text-black">
                        <IconStyled icon={faGithub} />
                    </Nav.Link>
                </Nav>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background-color: rgba(211, 211, 211, 1);   
`

const IconStyled = styled(FontAwesomeIcon)`
  font-size: 35px;
  width: fit-content;
`
const SpanStyled = styled.span`
    display: block;
    text-align: end;
`


// OBSERVAÇÕES:
// Termos de Uso - não funciona:
// {/* <Nav.Link href="/termos-de-uso.jpg" target="_blank" className="text-black">Termos de Uso</Nav.Link> */}
// Colocar Texto para Baixo:
// {/* <Nav.Link as={Link} to='/msHoffmann' className="text-black">@msHoffmann <SpanStyled>2022</SpanStyled></Nav.Link> */}