import { Board } from '../components/Board'
import { useContext, useState, useRef } from 'react' 
import '../App.css'
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider'; 
import PlayerIcon from '../assets/Player.svg';
import PlayGroundStyle from '../styles/PlayGround.module.css'
import BoardStyle from "../styles/Board.module.css";

function PlayGround() {
    const input = useRef<HTMLInputElement>(null);
    const { dispatch, setSize } = useContext(ListContext); 
    const { Playerstate, Playerdispatch } = useContext(PlayerContext);
    const { size } = useContext(ListContext);

    const allBlocksFilled = Playerstate.playerOneScore + Playerstate.playerTwoScore === size * size;

    const winner = Playerstate.playerOneScore > Playerstate.playerTwoScore ? 'Player 1' : 'Player 2';

    const handleToggleBot = () => {
        Playerdispatch({ type: "switchBot" });
    };
1
    const handleReset = () => {
        if(Number(input?.current?.value)){
        Playerdispatch({ type: "resetScore" }); 
        setSize(Number(input?.current?.value));
        dispatch({ type: "resetGrid", size: Number(input?.current?.value)});
        }
    };
    return (
        <div className={PlayGroundStyle.page}>

            <label>BoardSize
            <input type="number" ref={input} defaultValue="5" min="2"/></label>
            <br/>
            <div>
                <button onClick={handleToggleBot}>
                        {Playerstate.botOn ? "Turn off Bot" : "Turn on Bot"}
                </button>
            </div>
            <button onClick={handleReset}>Reset</button>
            <div className={PlayGroundStyle.scoreShowContainer}>
            <div className={PlayGroundStyle.scoreShow}>
                <img src={PlayerIcon} className={`${PlayGroundStyle.Icon} ${BoardStyle.Player1text}`} alt="Player 1" />{Playerstate.playerOneScore}
            </div>
            <div className={PlayGroundStyle.scoreShow}>
                <img src={PlayerIcon} className={`${PlayGroundStyle.Icon} ${BoardStyle.Player2text}`} alt="Player 2" />{Playerstate.playerTwoScore}
            </div>
        </div>
            <div>
                <Board/>
            </div>

            {allBlocksFilled && (
                <div className="winner-sign">
                    {winner} wins!
                </div>
            )}
        </div>
    )
}

export default PlayGround