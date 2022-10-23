import React from 'react';
import Root from './app/index';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UsageOfUltraFastCtx from './ctx/Usage';
import { MessagesDisplayApp } from './playground/textAreaEffect/index';

import Feedback from './app/pages/Feedback';
function App() {
  return (
    <div className='App'>
      {/* <Playground /> */}
      {/* <MessagesDisplayApp /> */}
      {/* <UsageOfUltraFastCtx /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Root />} />
          <Route path='/users' element={<Root />} />
          <Route path='/user/:id' element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
