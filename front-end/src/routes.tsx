import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Views/Home";
import React from 'react';
import { NotFoundView } from "./Views/NotFound/";
import { RegisterView } from "./Views/Register";
import { NewOrderView } from "./Views/NewOrder";
import { PublicOnlyRoute } from "./Components/PublicOnlyRoute";
import { LoginView } from "./Views/Login";
import { PrivateRoute } from "./Components/PrivateRoute";

export function Routes() {
  return (
    <RDRoutes>
      <Route path='/' element={<HomeView />} />
      <Route path='*' element={<NotFoundView />} />
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
      <Route path='/novo-pedido' element={<NewOrderView />} />
    </RDRoutes>
  )
}