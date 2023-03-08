import { useDispatch, useSelector } from "react-redux";
import { randomFlipCoin } from "../../helpers/random";
import { getDeposit, getBalance, updateBalance } from "../../store/userSlice";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./FlipCoinGame.module.scss";

export default function FlipCoinGame() {
    const {
        coinFlipResult,
        setCoinFlipResult
    } = useContext(GameContext);
    const dispatch = useDispatch();
    const balance = useSelector(getBalance);
    const deposit = useSelector(getDeposit);

    function handleClick(side) {
        const diff = randomFlipCoin(balance, deposit);
        dispatch(updateBalance(diff));

        if (side === "eagle") {
            (diff - balance > 0) ?
                setCoinFlipResult([...coinFlipResult, { Орел: +`+${+(diff - balance).toFixed(2)}` }])
                :
                setCoinFlipResult([...coinFlipResult, { Орел: +`${+(diff - balance).toFixed(2)}` }])
        }
        else if (side === "tail") {
            (diff - balance > 0) ?
                setCoinFlipResult([...coinFlipResult, { Решка: `+${+(diff - balance).toFixed(2)}` }])
                :
                setCoinFlipResult([...coinFlipResult, { Решка: `${+(diff - balance).toFixed(2)}` }])
        }
    };

    return (
        <div className={style.coins}>
            <button className={style.coin} type="button" onClick={() => handleClick("eagle")}>
                <img src={require("../../assets/images/eagle.png")} alt="eagle"></img>
            </button>
            <button className={style.coin} type="button" onClick={() => handleClick("tail")}>
                <img src={require("../../assets/images/tail.png")} alt="tail"></img>
            </button>
        </div>
    )
};
