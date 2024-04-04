import { Line } from "./Line";
import { Block } from "./Block";
import { useState, useContext } from "react";
import BoardStyle from "../styles/Board.module.css";
import { ListContext } from '../Providers/GridProvider'
import { PlayerContext } from '../Providers/PlayerProvider'
import Bot from "./Bot";

export const Board = () => {
    const { size } = useContext(ListContext); 
    const { PlayerState } = useContext(PlayerContext); 
    const Size = size;

    
    return (
        <div className={BoardStyle.Board}>
            {Array.from({ length: Size * 2 + 1 }, (_, y) => (
                <div key={y}>
                    {Boolean(y % 2) && Array.from({ length: Size + 1 }, (_, x) => (
                        <>
                            <Line key={`${x}-${y}`} x={x} y={y} direction={false} /> 
                            {x < Size && <Block key={`B${x}-${y}`} x={x} y={y} />}
                        </>
                    ))}
                    {!Boolean(y % 2) && Array.from({ length: Size }, (_, x) => (
                        <>
                            <div className={BoardStyle.Dot}></div>
                            <Line key={`${x}-${y}`} x={x} y={y} direction={true}/>
                            {x === Size - 1 && <div className={BoardStyle.Dot}></div>}
                        </>
                    ))}
                </div>
            ))}
            if(PlayerState.currentPlayer === 2)
            {
                <Bot/>
            }
        </div>
    );
}