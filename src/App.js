import React from 'react';
import './App.css';
import Token from './pages/Token/Token';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import TokenResume from './pages/Token/TokenResume';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Token />} />
          <Route path="/token-resume" element={<TokenResume />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
