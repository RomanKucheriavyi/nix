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
        setCoinFlipResult([...coinFlipResult, { Орел: `+${+(diff - balance).toFixed(2)}` }])
        :
        setCoinFlipResult([...coinFlipResult, { Орел: `${+(diff - balance).toFixed(2)}` }])
    } 
    else if (side === "tail") {
      (diff - balance > 0) ?
        setCoinFlipResult([...coinFlipResult, { Решка: `+${+(diff - balance).toFixed(2)}` }])
        :
        setCoinFlipResult([...coinFlipResult, { Решка: `${+(diff - balance).toFixed(2)}` }])
    }
  };

  return (
    <>
      <button className={style.btn} type="button" onClick={() => handleClick("eagle")}>
        Орел
      </button>
      <button className={style.btn} type="button" onClick={() => handleClick("tail")}>
        Решка
      </button>
    </>
  )
};
