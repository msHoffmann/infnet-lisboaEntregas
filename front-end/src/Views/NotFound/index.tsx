import { Layout } from "../../Components/Layout";
import React from 'react';
import { PageTitle } from "../../Components/PageTitle";

export function NotFoundView () {
    return(
        <Layout>
                <PageTitle>Página não encontrada.</PageTitle>
                <p className="text-center pb-5">A página que você acessou não existe.</p>
        </Layout>
    )  
}
