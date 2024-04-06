import { Board } from '../components/Board'
import { useContext, useState, useRef } from 'react' 
import '../App.css'
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider'; 

function PlayGround() {
    const input = useRef<HTMLInputElement>(null);
    const { dispatch, setSize } = useContext(ListContext); 
    const { Playerstate, Playerdispatch } = useContext(PlayerContext);
    const { state, size } = useContext(ListContext);

    console.log(size);

    const allBlocksFilled = Playerstate.playerOneScore + Playerstate.playerTwoScore === size * size;

    const winner = Playerstate.playerOneScore > Playerstate.playerTwoScore ? 'Player 1' : 'Player 2';

    const handleReset = () => {
        if(Number(input?.current?.value) < 8){
        Playerdispatch({ type: "resetScore" }); 
        setSize(Number(input?.current?.value));
        dispatch({ type: "resetGrid", size: Number(input?.current?.value)});
        }
    };
    return (
        <div>
        <div>
            <span>Player1: {Playerstate.playerOneScore} </span>
            <span>Player2: {Playerstate.playerTwoScore} </span>
        </div>
        <input type="number" ref={input} defaultValue="5" max="7" min="2"/>
        <button onClick={handleReset}>Reset</button>
        <Board/>
        {allBlocksFilled && (
            <div className="winner-sign">
                {winner} wins!
            </div>
        )}
        </div>
    )
}

export default PlayGround