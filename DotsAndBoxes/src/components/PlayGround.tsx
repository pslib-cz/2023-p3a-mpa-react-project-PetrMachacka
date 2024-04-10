import { Board } from '../components/Board'
import { useContext, useState, useRef } from 'react' 
import '../App.css'
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider'; 
import PlayerIcon from '../assets/Player.svg';
import SettingsIcon from '../assets/Settings.svg';
import PlayGroundStyle from '../styles/PlayGround.module.css'
import BoardStyle from "../styles/Board.module.css";
import { Link } from 'react-router-dom';


function PlayGround() {
    const { Playerstate } = useContext(PlayerContext);
    const { state } = useContext(ListContext);


    const allBlocksFilled = Playerstate.playerOneScore + Playerstate.playerTwoScore === state.size * state.size;

    const winner = Playerstate.playerOneScore > Playerstate.playerTwoScore ? 'Player 1' : 'Player 2';

    return (
        <div className={PlayGroundStyle.page}>
            
            
            <div className={PlayGroundStyle.scoreShowContainer}>
                <div className={PlayGroundStyle.scoreShow}>
                    <img src={PlayerIcon} className={`${PlayGroundStyle.Icon} ${BoardStyle.Player1text}`} alt="Player 1" />{Playerstate.playerOneScore}
                </div>
                <Link to="settings" className="settings__button">
                    <img src={SettingsIcon} className={`${PlayGroundStyle.SettingsIcon}`}/>
                </Link>
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