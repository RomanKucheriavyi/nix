import PageHeadline from "../../componets/page-headline";
import InfoPanel from "../../componets/info-panel";
import GuessNumGame from "../../componets/guess-num-game";
import ResultsPanel from "../../componets/results-panel";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./GuessNum.module.scss";

export default function GuessNum() {
    const {
        numResult,
    } = useContext(GameContext);
    return (
        <div className={style.container}>
            <div className={style.game}>
                <PageHeadline label="Вгадай число" />
                <InfoPanel input={"Кожен раз коли ви клікаєте по на кнопку “спробувати”, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення від 1 до 10,  якщо ваш варінт співпав з тим який згенерувала программа то ви отримаєте вдесятеро більше ніж поставили, якщо ні то втрачаєте списані кошти з балансу."} />
                <GuessNumGame />
            </div>
            <ResultsPanel arr={numResult} />
        </div>
    )
};

