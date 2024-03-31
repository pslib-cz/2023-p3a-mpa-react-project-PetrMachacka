import React, { useContext } from 'react';
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider';
import BoardStyle from "../styles/Board.module.css";

export const Line = ({ y, x, direction }: { y: number, x: number, direction: boolean }) => {
    const { state, dispatch } = useContext(ListContext);
    const { currentPlayer, switchPlayer } = useContext(PlayerContext);


    const handleClick = () => {
        if (state.items[y][x] === 0) 
        {
            dispatch({ type: "addToGrid", y, x, player: currentPlayer });
            switchPlayer();
        }

    };

    const lineClassName = direction ? BoardStyle.Horizontal : BoardStyle.Vertical;
    var clickedClassName = '';
    if (state.items[y][x] === 1) 
    {
        clickedClassName = BoardStyle.Player1;
    }
    if (state.items[y][x] === 2) 
    {
        clickedClassName = BoardStyle.Player2;
    }
 
    return (
        <div className={`${BoardStyle.line} ${lineClassName} ${clickedClassName}`} onClick={handleClick} />
    );
};