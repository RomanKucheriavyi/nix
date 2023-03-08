import FlipCoinGame from "../../componets/flip-coin-game";
import PageHeadline from "../../componets/page-headline";
import InfoPanel from "../../componets/info-panel";
import ResultsPanel from "../../componets/results-panel";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./CoinFlip.module.scss";

export default function CoinFlip() {
    const {
        coinFlipResult,
    } = useContext(GameContext);
    return (
        <div className={style.container}>
            <div className={style.game}>
                <PageHeadline label={"Монетка"} />
                <InfoPanel input={"Кожен раз коли ви нажимаєте на орел чи решка, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення,  якщо ваш варінт співпав з тим який згенерувала программа то ви подвоюєте ставку якщо ні то втрачаєте списані кошти з балансу."} />
                <FlipCoinGame />
            </div>
            <ResultsPanel arr={coinFlipResult} />
        </div>
    )
};
