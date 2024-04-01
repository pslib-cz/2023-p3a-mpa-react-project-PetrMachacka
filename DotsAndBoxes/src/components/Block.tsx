import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../Providers/GridProvider';
import BoardStyle from "../styles/Board.module.css";
import { PlayerContext } from '../Providers/PlayerProvider';

export const Block = ({ x, y }: { x: number, y: number }) => {
    const { state } = useContext(ListContext);
    const [closed, setClosed] = useState(0);
    const { Playerstate, Playerdispatch: playerDispatch } = useContext(PlayerContext);

    useEffect(() => {
        if(state.items[y][x] && state.items[y][x + 1] && state.items[y + 1][x] && state.items[y - 1][x])
        {
            if(closed === 0){
                if(Playerstate.currentPlayer === 1) {
                    playerDispatch({ type: 'incrementPlayerTwoScore' });
                } else {
                    playerDispatch({ type: 'incrementPlayerOneScore' });
                }
                setClosed(Playerstate.currentPlayer);
                playerDispatch({ type: 'switchPlayer' });
            }
        }
        else
        {
            setClosed(0);
        }
    }, [state.items]);

    var blockClassName = "";

    if (closed === 1) 
    {
        blockClassName = BoardStyle.Player2;
    }
    if (closed === 2) 
    {
        blockClassName = BoardStyle.Player1;
    }
    return (
        <div className={`${BoardStyle.Box} ${blockClassName}`}></div>
    );
};