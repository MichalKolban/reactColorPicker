import React, { useState } from 'react';
import ColorGenerator from "./ColorGenerator";
import ColorInfo from './ColorInfo';
import classes from './App.module.css'

function App() {

  const [userColor, setUserColor] = useState('');
  const [userHEX, setUserHEX] = useState('');

  const handleColor = (props) => {
    setUserColor(props);
  }

  const handleHEX = (props) => {
    setUserHEX(props);
  }

  return (
    <>
    <div className={classes.container} >
      <div className={classes.box} style={{backgroundColor : `${userColor}`}}></div>
      <ColorGenerator getColor={handleColor} getHEX={handleHEX}/>
      <ColorInfo color={userHEX} />
    </div>
    </>
    );
}

export default App;
