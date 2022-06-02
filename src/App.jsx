import React, { useState } from 'react';

import './App.css';

import YCalc from './components/YellowCalc';

export default function YellowCalc() {
  const [modal, setModal] = useState(false)
  const [buttonText, setButtonText] = useState("OPEN")
  
  return (
    <div className="divApp">
      <h1>Yellow Calc</h1>
      {modal && <YCalc />}
      <button 
      className="buttonRender" 
      onClick={() => {
        if(modal === false) {
          setModal(true)
          setButtonText("CLOSE")
        } else {
          setModal(false)
          setButtonText("OPEN")
        }
      }}
      >{buttonText}</button>
    </div>
  );
}
