import { useSelector, useDispatch } from "react-redux";
import {getRandomInt} from "../../helpers/random";
import { getBalance, getDeposit, updateBalance } from "../../store/userSlice";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./DoorGame.module.scss";

export default function DoorGame() {
  const {
    doorResult,
    setDoorResult
  } = useContext(GameContext);
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);
  const deposite = useSelector(getDeposit);

  function handleClick (e) {
    const target = e.target.textContent;
    if (getRandomInt(1, 3) === +target) {
      const diff = +(balance + (deposite / 100) * 5).toFixed(2);
      dispatch(updateBalance(diff));
      setDoorResult([
        ...doorResult,
        { [target]: `+${(diff-balance).toFixed(2)}` },
      ]);
    } else {
      const diff = +(balance - (deposite / 100) * 5).toFixed(2);
      dispatch(updateBalance(diff));
      setDoorResult([
        ...doorResult,
        { [target]: `${(diff-balance).toFixed(2)}` },
      ]);
    }
  };

  return (
    <ul className={style.doors}>
      <li onClick={handleClick} className={style.door}>
        1
      </li>
      <li onClick={handleClick} className={style.door}>
        2
      </li>
      <li onClick={handleClick} className={style.door}>
        3
      </li>
    </ul>
  )
};
