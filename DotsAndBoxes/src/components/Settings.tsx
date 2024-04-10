// src/components/Settings.tsx
import React, { useContext, useRef } from 'react';
import { PlayerContext } from '../Providers/PlayerProvider';
import { ListContext } from '../Providers/GridProvider';
import { Link } from 'react-router-dom';
import PlayGroundStyle from '../styles/PlayGround.module.css';

const Settings = () => {
const input = useRef<HTMLInputElement>(null);
  const { Playerstate, Playerdispatch } = useContext(PlayerContext);
  const { dispatch } = useContext(ListContext);

  const handleBoardSizeChange = (event) => {
    dispatch({ type: 'setGridSize', size: event.target.value });
  };

  const handleReset = () => {
    if(Number(input?.current?.value)){
    Playerdispatch({ type: "resetScore" }); 
    dispatch({ type: "setGridSize", size: Number(input?.current?.value)});
    dispatch({ type: "resetGrid", size: Number(input?.current?.value)});
    }
};

  const handleBotToggle = () => {
    Playerdispatch({ type: 'switchBot' });
  };

  return (
    <div className={PlayGroundStyle.page}> {/* Use the 'page' class from PlayGround styles */}
      <h2>Settings</h2>
      <label>BoardSize
        <input type="number" ref={input} defaultValue="5" min="2"/></label>
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