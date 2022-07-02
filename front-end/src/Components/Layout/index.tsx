import React from 'react';
import { Header } from "./Header"
import { Footer } from './Footer'
import styled from 'styled-components';

type Props={
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    return(
    <>
        <Header />
        <MainStyled>
            {children}
        </MainStyled>
        <Footer />
    </>
    )
}

const MainStyled = styled.main`

`
