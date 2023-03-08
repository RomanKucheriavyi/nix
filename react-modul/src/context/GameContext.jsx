import { useState, createContext, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
    const [coinFlipResult, setCoinFlipResult] = useState([]);
    const [doorResult, setDoorResult] = useState([]);
    const [numResult, setNumResult] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        let totalNum = numResult.reduce((acc, item) => acc + +Object.values(item), 0);
        let totalDoor = doorResult.reduce((acc, item) => acc + +Object.values(item), 0);
        let totalCoin = coinFlipResult.reduce((acc, item) => acc + +Object.values(item), 0);
        setResults([{ "Вгадай число": totalNum.toFixed(1) }, {"Вгадай двері":totalDoor.toFixed(1)}, {"Монетка": totalCoin.toFixed(1)}])
    }, [numResult, doorResult, coinFlipResult]);

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
            {children}
        </GameContext.Provider>
    )
};

export default GameContext;