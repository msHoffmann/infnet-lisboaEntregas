import React from 'react';

type Layout={
    children: React.ReactNode
}

export const Layout: React.FC<Layout> = (props: { children: React.ReactNode
}) => {
    return(
    <>
        <p>Header</p>
        <p>Conteúdo</p>
        <p>Footer</p>
    </>
    )
}