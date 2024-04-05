import { useContext } from 'react';
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider';
import BoardStyle from "../styles/Board.module.css"

export const Line = ({ y, x, direction }: { y: number, x: number, direction: boolean }) => {
    const { state, dispatch } = useContext(ListContext);
    const { Playerstate, Playerdispatch: playerDispatch } = useContext(PlayerContext);
    const BlockComplete = (items: number[][], y: number, x: number) => {
        console.log(items[y][x] + items[y][x + 1] + items[y + 1][x] + items[y - 1][x])
        if (items[y][x] != 0 && items[y][x + 1] != 0 && items[y + 1][x] != 0 && items[y - 1][x]!= 0) { 
            return true;
        }
        else{
            return false;
        }
    }
    const CheckCompleted = (items: number[][], y: number, x: number, direction: boolean) => {
        if(direction){
            if(BlockComplete(items, y, x) && BlockComplete(items, y, x)){
                return true;
            }
            return false;
        }
        else{
            if(BlockComplete(items, y, x) && BlockComplete(items, y, x + 1)){
                return true;
            }
            return false;
        }
    }

    const handleClick = () => {
        if (state.items[y][x] === 0) 
        {
            dispatch({ type: "addToGrid", y, x, player: Playerstate.currentPlayer });
            const completesBlock = CheckCompleted(state.items, y, x, direction);
            console.log(completesBlock);
            playerDispatch({ type: 'switchPlayer' });
        }

    };
    const hoverColor = state.items[y][x] == 0 ? (Playerstate.currentPlayer === 1 ? BoardStyle.line1 : BoardStyle.line2) : "";
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
        <div className={`${BoardStyle.line} ${lineClassName} ${clickedClassName} ${hoverColor}`} onClick={handleClick} />
    );
};