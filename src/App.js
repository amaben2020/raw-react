import React from 'react';
import Root from './app/index';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UsageOfUltraFastCtx from './ctx/Usage';
import { MessagesDisplayApp } from './playground/textAreaEffect/index';

function App() {
  return (
    <div className='App'>
      {/* <Playground /> */}
      {/* <MessagesDisplayApp /> */}
      {/* <UsageOfUltraFastCtx /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            {/* <Route index element={<Home />} /> */}
            <Route path='/user' element={<Root />}>
              <Route path='/user/:id' element={<Root />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      ,{/* <Root /> */}
    </div>
  );
}

export default App;
