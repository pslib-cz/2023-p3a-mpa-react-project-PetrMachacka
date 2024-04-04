import React, { useState, useEffect, useReducer, Dispatch, ReactNode } from 'react';

export type Grid = { 
    items: number[][];
};
const createInitialState = (size: number): Grid => ({ items: Array.from({ length: size * 2 + 1 }, () => Array(size + 1).fill(0)) });

const initialState = createInitialState(6);

export type GridAction =
    | { type: "addToGrid"; y: number; x: number; player: number}
    | { type: "resetGrid"; size: number};

function reducer(state: Grid, action: GridAction): Grid {
    switch (action.type) {
        case 'addToGrid':
            const newGrid: Grid = { items: [...state.items] };
            if (action.y !== undefined && action.x !== undefined) {
                newGrid.items[action.y][action.x] = action.player;
            }
            return newGrid;
        case 'resetGrid':
            return createInitialState(action.size);
        default:
            throw new Error();
    }
}

export const ListContext = React.createContext<{ state: Grid; dispatch: Dispatch<GridAction>; setSize: React.Dispatch<React.SetStateAction<number>>; boxes: number; addBox: React.Dispatch<React.SetStateAction<number>>; size: number }>({
    state: initialState,
    dispatch: () => null,
    setSize: () => null,
    size: 6,
    addBox: () => null,
    boxes: 0
});


export const Provider = ({ children }: { children: ReactNode }) => {
    const [size, setSize] = useState(6);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [boxes, addBox] = useState(0);
    useEffect(() => {
        //console.log(state.items);
    }, [state.items])

    return <ListContext.Provider value={{ state, dispatch, setSize , size, boxes, addBox}}>{children}</ListContext.Provider>;
};