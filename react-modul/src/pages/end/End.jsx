import InfoPanel from "../../componets/info-panel";
import Restart from "../../componets/restart/Restart";
import { useSelector } from "react-redux";
import { getDeposit, getBalance, getName } from "../../store/userSlice";

import style from "./End.module.scss";

export default function End() {
    const deposit = useSelector(getDeposit);
    const balance = useSelector(getBalance);
    const name = useSelector(getName);
    const label = (balance / deposit >= 2) ? 
        `Вітаємо ${name}, ви змогли подвоїти ваш депозит з ${deposit}$ до ${balance}$` : 
        `${name}, ви не змогли подвоїти ваш депозиз з ${deposit}$, можливо наступного разу пощастить`;
    return (
        <div className={style.end}>
            <InfoPanel input={label}/>
            <Restart />
        </div>
    )
};