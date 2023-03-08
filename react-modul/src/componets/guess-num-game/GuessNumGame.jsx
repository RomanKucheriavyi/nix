import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getBalance, getDeposit, updateBalance } from "../../store/userSlice";
import { getRandomInt } from "../../helpers/random";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./GuessNumGame.module.scss";

export default function GuessNumGame() {
  const {
    numResult,
    setNumResult
  } = useContext(GameContext);
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);
  const deposite = useSelector(getDeposit);
  const [num, setNum] = useState("");

  const handleClick = () => {
    if (num < 1 || num > 10) {
      setNum("");
      return;
    };
    if (getRandomInt(1, 10) === +num) {
      const diff = +(balance + (deposite / 100) * 5).toFixed(2);
      dispatch(updateBalance(diff));
      setNumResult([
        ...numResult,
        { [num]: `+${+((deposite / 100) * 5).toFixed(2)}` },
      ]);
    } else {
      const diff = +(balance - (deposite / 100) * 5).toFixed(2); 
      dispatch(updateBalance(diff));
      setNumResult([
        ...numResult,
        { [num]: `-${+((deposite / 100) * 5).toFixed(2)}` },
      ]);
    }
  };

  return (
    <>
        <input
          value={num}
          onChange={e => setNum(e.target.value)}
          type="number"
          placeholder="Введіть число"
        />
        <button className={style.btn} type="button" onClick={handleClick}>
          Спробувати
        </button>
    </>
  )
};
