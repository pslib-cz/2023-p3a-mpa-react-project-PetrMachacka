import React, { useState, useEffect, useReducer, Dispatch, ReactNode } from 'react';

export type Grid = { items: number[][] };

const createInitialState = (): Grid => ({ items: Array.from({ length: 5 * 2 + 1 }, () => Array(5 + 1).fill(0)) });

const initialState = createInitialState();

export type GridAction =
    | { type: "addToGrid"; y: number; x: number; player: number}
    | { type: "resetGrid";};

function reducer(state: Grid, action: GridAction): Grid {
    switch (action.type) {
        case 'addToGrid':
            const newGrid: Grid = { items: [...state.items] };
            if (action.y !== undefined && action.x !== undefined) {
                newGrid.items[action.y][action.x] = action.player;
            }
            return newGrid;
        case 'resetGrid':
            return createInitialState();
        default:
            throw new Error();
    }
}

export const ListContext = React.createContext<{ state: Grid; dispatch: Dispatch<GridAction> }>({
    state: initialState,
    dispatch: () => null,
});


export const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log(state.items);
    }, [state.items])


    return <ListContext.Provider value={{ state, dispatch }}>{children}</ListContext.Provider>;
};