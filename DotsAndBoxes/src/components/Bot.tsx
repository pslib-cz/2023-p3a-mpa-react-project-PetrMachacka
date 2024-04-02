import { useContext, useEffect } from 'react';
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider';
import BoardStyle from "../styles/Board.module.css"

const Bot = () => {
    const { state, dispatch, size } = useContext(ListContext);
    const { Playerstate, Playerdispatch: playerDispatch } = useContext(PlayerContext);

    useEffect(() => {
        var bot: number[][] = new Array(size).fill(0).map(() => new Array(size).fill(0));
        console.log(bot);
        if (Playerstate.currentPlayer === 2) {
            for(let y = 1; y <= size * 2 + 1; y+2) {
                for(let x = 0; x <= size; x++) {
                    
                    //state.items[y][x] && state.items[y][x + 1] && state.items[y + 1][x] && state.items[y - 1][x]
                }
            }
        }
    }, [Playerstate.currentPlayer]);

    return null; 
};

export default Bot;