import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import App from "../src/componets/app/App";
import { GameProvider } from './context/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GameProvider>
        <Router>
          <App />
        </Router>
      </GameProvider>
    </Provider>
  </React.StrictMode>
);
