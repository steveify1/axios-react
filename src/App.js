import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import OutermostContainer from './components/OutermostContainer/OutermostContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <OutermostContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
