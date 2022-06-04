import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Views/Home";
import React from 'react';

export function Routes () {
  return (
    <RDRoutes>
      <Route path='/' element={<HomeView />} />
    </RDRoutes>
  )
}