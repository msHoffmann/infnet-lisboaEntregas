import React from 'react';
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo-lisboa.svg"
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from '../CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, selectIsUserLoggedIn } from "../../store/slices/userSlice";
import { logoutUser } from "../../services/logoutUser";

type Props = {
    startWhite?: boolean
}

export function Header({ startWhite = true }: Props) {
    const [isWhite, setIsWhite] = useState(startWhite)
    useEffect(() => {
        const scrollChange = () => {
            const isLowScroll = window.scrollY < 100
            if (startWhite && isLowScroll !== isWhite) {
                setIsWhite(isLowScroll)
            }
        }
        window.addEventListener('scroll', scrollChange)
        return () => {
            window.removeEventListener('scroll', scrollChange)
        }
    }, [isWhite, startWhite])
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await logoutUser()
        dispatch(deleteUser())
        navigate('/login')
    }
    return (
        <NavbarStyled fixed="top" expand="lg" bg={isWhite ? undefined : 'white'}>
            <Container>
                <Navbar.Brand to='/' as={Link}>
                    <ImageStyled src={Logo} alt="Lisboa Entregas" width={229} height={55} />
                </Navbar.Brand>
                <NavbarToggleStyled aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} className={isWhite ? 'text-white' : 'text-dark'} size='lg' />
                </NavbarToggleStyled>
                <NavBarCollapseStyled id="basic-navbar-nav" className="justify-content-center text-center">
                    <Nav className="ms-auto">
                        {isUserLoggedIn ? (
                            <>
                                <CustomButton variant="success" className="mt-2 mt-lg-0 ms-lg-4" to='/novo-pedido'>Novo Pedido</CustomButton>
                                <CustomButton variant="success" className="mt-2 mt-lg-0 ms-lg-4" onClick={handleLogout}>Sair</CustomButton>
                            </>
                        ) : (
                            <>
                                <CustomButton variant="success" className="mt-2 mt-lg-0 ms-lg-4" to='/cadastro'>Criar Conta</CustomButton>
                                <CustomButton variant="success" className="mt-2 mt-lg-0 ms-lg-4" to='/login'>Fazer Login</CustomButton>
                            </>
                        )}
                    </Nav>
                </NavBarCollapseStyled>
            </Container>
        </NavbarStyled>
    )
}

const ImageStyled = styled.img`
    @media(min-width: 992px){
        width: 300px;
        height: auto; 
    }
`

const NavbarToggleStyled = styled(Navbar.Toggle)`
  border: none;
`

const NavbarStyled = styled(Navbar)`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 0, 0, 0.85);
    height: 75px;
    transition: all .2s linear;
    /* ${props => props.bg === 'white' && `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `} */
`

const NavBarCollapseStyled = styled(Navbar.Collapse)`
@media(max-width: 990px) {
    background-color: white;   
    margin: 0 -12px;
    padding: 1rem 2rem; 
}
`