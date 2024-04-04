import { useContext, useEffect } from 'react';
import { ListContext } from '../Providers/GridProvider';
import { PlayerContext } from '../Providers/PlayerProvider';
import BoardStyle from "../styles/Board.module.css"

const Bot = () => {
    const { state, dispatch, size } = useContext(ListContext);
    const { Playerstate, Playerdispatch: playerDispatch } = useContext(PlayerContext);
    useEffect(() => {
        var bot: string[][] = new Array(size).fill(0).map(() => new Array(size).fill(""));
        if (Playerstate.currentPlayer === 2) {
            var BotY = 0;
            for(let y = 1; y < size * 2 + 1; y+=2) {
                for(let x = 0; x < size; x++) {
                    if (state.items[y][x]) {  
                        bot[BotY][x] += "L";
                    }
                    if (state.items[y][x + 1]) {
                        bot[BotY][x] += "R";
                    }
                    if (state.items[y + 1][x]) {
                        bot[BotY][x] += "B";
                    }
                    if (state.items[y - 1][x]) {
                        bot[BotY][x] += "T";
                    }
                }
                BotY++;
            }
            //console.log(bot);
            let threes = [];
            let smallest = Infinity;
            let smallestIndices = [];

            for(let i = 0; i < bot.length; i++) {
                for(let j = 0; j < bot[i].length; j++) {
                    if(bot[i][j].length === 3) {
                        threes.push({i, j});
                    }
                    if(bot[i][j].length < smallest) {
                        smallest = bot[i][j].length;
                        smallestIndices = [{i, j}];
                    } else if(bot[i][j].length === smallest) {
                        smallestIndices.push({i, j});
                    }
                }
            }

            /*console.log("Threes: ", threes);
            console.log("Smallest: ", smallest, " at indices: ", smallestIndices);*/

            if(threes.length > 0) {
                let randomIndex = Math.floor(Math.random() * threes.length);
                let {i, j} = threes[randomIndex];
                console.log("i: ", i, " j: ", j);
                let BlockY = i * 2 + 1;
                if(!bot[i][j].includes("L")) {
                    dispatch({ type: "addToGrid", y: BlockY, x: j, player: Playerstate.currentPlayer });
                }
                if(!bot[i][j].includes("R")) {
                    dispatch({ type: "addToGrid", y: BlockY, x: j + 1, player: Playerstate.currentPlayer });
                }
                if(!bot[i][j].includes("B")) {
                    dispatch({ type: "addToGrid", y: BlockY + 1, x: j, player: Playerstate.currentPlayer });
                }
                if(!bot[i][j].includes("T")) {
                    dispatch({ type: "addToGrid", y: BlockY - 1, x: j, player: Playerstate.currentPlayer });
                }
            }else {
                let randomIndex = Math.floor(Math.random() * smallestIndices.length);
                let {i, j} = smallestIndices[randomIndex];
                console.log("i: ", i, " j: ", j);
                let BlockY = i * 2 + 1;
                if(!bot[i][j].includes("L")) {
                    dispatch({ type: "addToGrid", y: BlockY, x: j, player: Playerstate.currentPlayer });
                }
                else if(!bot[i][j].includes("R")) {
                    dispatch({ type: "addToGrid", y: BlockY, x: j + 1, player: Playerstate.currentPlayer });
                }
                else if(!bot[i][j].includes("B")) {
                    dispatch({ type: "addToGrid", y: BlockY + 1, x: j, player: Playerstate.currentPlayer });
                }
                else if(!bot[i][j].includes("T")) {
                    dispatch({ type: "addToGrid", y: BlockY - 1, x: j, player: Playerstate.currentPlayer });
                }
            }
            playerDispatch({ type: 'switchPlayer' });
        }
    }, [Playerstate.currentPlayer]);

    return null; 
};

export default Bot;