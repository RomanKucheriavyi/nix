import { useState, createContext } from "react";

const GameContext = createContext();

export function GameProvider ({ children }) {
    const [coinFlipResult, setCoinFlipResult] = useState([]);
    const [doorResult, setDoorResult] = useState([]);
    const [numResult, setNumResult] = useState([]);
    const [results, setResults] = useState([]);
    return (
        <GameContext.Provider 
            value={{
                coinFlipResult,
                doorResult,
                numResult,
                results,
                setCoinFlipResult,
                setDoorResult,
                setNumResult,
                setResults
            }}
        >
            { children }
        </GameContext.Provider>
    )
};

export default GameContext;