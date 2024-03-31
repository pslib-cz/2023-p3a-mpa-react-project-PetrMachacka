import React, { createContext, useState, ReactNode, useEffect } from 'react';

export const PlayerContext = createContext({ currentPlayer: 1, switchPlayer: () => {} });

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [currentPlayer, setCurrentPlayer] = useState(1); // 1 for Player One, 2 for Player Two
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    useEffect(() => {
        console.log(`Current Player: ${currentPlayer}`);
    }, [currentPlayer]);

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    };


    return (
        <PlayerContext.Provider value={{ currentPlayer, switchPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;