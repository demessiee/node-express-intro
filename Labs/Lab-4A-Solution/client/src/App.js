import React from 'react';
import LeftContent from './components/LeftContent.js'
import RightContent from './components/RightContent.js'
import CenterContent from './components/CenterContent.js'
import FooterContent from './components/FooterContent.js'

import './css/App.css';

function App() {
  return (
    <div>
      <div className="main-content">
        <LeftContent/>
        <CenterContent/>
        <RightContent/>
      </div>
      <div>
        <FooterContent/>
      </div>
      

    </div>
  );
}

export default App;
