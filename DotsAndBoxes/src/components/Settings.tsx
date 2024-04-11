// src/components/Settings.tsx
import React, { useContext, useRef, useState } from 'react';
import { PlayerContext } from '../Providers/PlayerProvider';
import { ListContext } from '../Providers/GridProvider';
import { Link } from 'react-router-dom';
import PlayGroundStyle from '../styles/PlayGround.module.css';

const Settings = () => {
  const { Playerstate, Playerdispatch } = useContext(PlayerContext);
  const { state , dispatch } = useContext(ListContext);
  const [size, setSize] = useState(5);
  const handleBoardSizeChange = (change: number) => {
    setSize(size + change);
  };

  const handleReset = () => {
    Playerdispatch({ type: "resetScore" }); 
    dispatch({ type: "resetGrid", size: size});
};

  const handleBotToggle = () => {
    Playerdispatch({ type: 'switchBot' });
  };

  return (
    <div className={PlayGroundStyle.page}>
      <h2>Settings</h2>
      <div className={PlayGroundStyle.AddButtonContainer}>
        <button className={PlayGroundStyle.AddButton} onClick={() => handleBoardSizeChange(-1)}>-</button>
        <span>{size}</span>
        <button className={PlayGroundStyle.AddButton} onClick={() => handleBoardSizeChange(1)}>+</button>
      </div>
      <button onClick={handleReset}>Reset Game</button>
      <button onClick={handleBotToggle}>
        {Playerstate.botOn ? "Turn off Bot" : "Turn on Bot"}
      </button>
      <Link to="/" className="settings__button">{"nice"}
      </Link>
    </div>
  );
};

export default Settings;