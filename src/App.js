import React from 'react';
import './App.css';

import UsageOfUltraFastCtx from './ctx/Usage';
import { MessagesDisplayApp } from './playground/textAreaEffect/index';

function App() {
  return (
    <div className='App'>
      {/* <Playground /> */}

      <MessagesDisplayApp />

      <UsageOfUltraFastCtx />
    </div>
  );
}

export default App;
