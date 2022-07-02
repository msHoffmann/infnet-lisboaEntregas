import styled from 'styled-components';
import React from 'react';

type Props = {
    children: React.ReactNode
}

export function PageTitle ({ children } : Props) {
    return (
        <TitleStyled className="mt-4 text-center">{children}</TitleStyled>
    )
}

const TitleStyled = styled.h1`
    padding-top: 75px;
    color: rgba(0, 51, 153, 1);
`