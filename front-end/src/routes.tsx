import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Views/Home";
import React from 'react';
import { NotFoundView } from "./Views/NotFound/";
import { RegisterView } from "./Views/Register";
import { NewOrderView } from "./Views/NewOrder";
import { PublicOnlyRoute } from "./Components/PublicOnlyRoute";
import { LoginView } from "./Views/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import { HoffmannView } from "./Views/msHoffmann";
import { NewOrderSuccessView } from "./Views/NewOrderSuccess";
import { TermosView } from "./Views/Termos";

export function Routes() {
  return (
    <RDRoutes>
      <Route path='/' element={<HomeView />} />
      <Route path='*' element={<NotFoundView />} />
      <Route path='/msHoffmann' element={<HoffmannView />} />
      <Route path='/termos-de-uso' element={<TermosView />} />
      <Route
        path='/cadastro'
        element={
          <PublicOnlyRoute>
            <RegisterView />
          </PublicOnlyRoute>
        }
      />
       <Route
        path='/login'
        element={
          <PublicOnlyRoute>
            <LoginView />
          </PublicOnlyRoute>
        }
      />
      <Route
        path='/novo-pedido'
        element={
          <PrivateRoute>
            <NewOrderView />
          </PrivateRoute>
        }
      />
       <Route
        path='/novo-pedido/sucesso'
        element={
          <PrivateRoute>
            <NewOrderSuccessView />
          </PrivateRoute>
        }
      />
      <Route path='/novo-pedido' element={<NewOrderView />} />
    </RDRoutes>
  )
}