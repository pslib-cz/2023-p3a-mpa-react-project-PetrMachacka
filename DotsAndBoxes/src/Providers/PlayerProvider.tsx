import React, { createContext, useReducer, ReactNode, useEffect, Dispatch } from 'react';

type PlayerState = {
    currentPlayer: number;
    playerOneScore: number;
    playerTwoScore: number;
};

type PlayerAction =
    | { type: 'switchPlayer' }
    | { type: 'incrementPlayerOneScore' }
    | { type: 'incrementPlayerTwoScore' }
    | { type: 'resetScore' }

const initialState: PlayerState = {
    currentPlayer: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
};

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
    switch (action.type) {
        case 'switchPlayer':
            return { ...state, currentPlayer: state.currentPlayer === 1 ? 2 : 1};
        case 'incrementPlayerOneScore':
            return { ...state, playerOneScore: state.playerOneScore + 1 };
        case 'incrementPlayerTwoScore':
            return { ...state, playerTwoScore: state.playerTwoScore + 1 };
        case 'resetScore':
            return { ...state, playerOneScore: 0, playerTwoScore: 0, currentPlayer: 1};

        default:
            return state;
    }
}

export const PlayerContext = createContext({ Playerstate: initialState, Playerdispatch: {} as Dispatch<PlayerAction> });

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [Playerstate, Playerdispatch] = useReducer(playerReducer, initialState);

    useEffect(() => {  
        console.log(`Player One Score: ${Playerstate.playerOneScore}`);
    }, [Playerstate.playerOneScore, Playerstate.playerTwoScore]);

    useEffect(() => {
        console.log(`Current Player: ${Playerstate.currentPlayer}`);
    }, [Playerstate.currentPlayer]);

    return (
        <PlayerContext.Provider value={{ Playerstate, Playerdispatch }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;