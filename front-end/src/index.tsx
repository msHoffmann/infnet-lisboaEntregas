import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './assets/css/global';
import store from './store/store';
import { Provider as ReduxProvider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id': 'AaYNRcHcHRzc6K6eFIbOr74Gu_6aRznfTxkhDiH1_l7K_OO8d6AyuJehOu-WBQ0_8wFOaoQmrpwQnKX9',
  'currency': 'EUR'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PayPalScriptProvider options={paypalOptions}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </ReduxProvider>
  </React.StrictMode>
);