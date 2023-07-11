import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Game from './components/pages/game';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/notfound';
import VsCPU from './components/organisms/vsCpu';
import GameModeSelect from './components/pages/gameModeSelect';
import Pvp from './components/pages/pvp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Game>
        <Routes>
          <Route index path="/" element={<GameModeSelect/>} errorElement={<NotFound/>} ></Route>
          <Route index path="/vsCpu" element={<VsCPU/>} ></Route>
          <Route index path="/pvp" element={<Pvp/>} ></Route>
        </Routes>
      </Game>
    </BrowserRouter>
  </React.StrictMode>
);