import FlipCoinGame from "../../componets/flip-coin-game";
import style from "./CoinFlip.module.css";
import PageHeadline from "../../componets/page-headline";
import InfoPanel from "../../componets/info-panel";
import SidePanel from "../../componets/side-panel";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

export default function CoinFlip() {
    const {
        coinFlipResult,
    } = useContext(GameContext); 
    return (
        <>
            <div className={style.wrapper}>
                <div>
                    <PageHeadline label={"Монетка"} />
                    <InfoPanel input={"Кожен раз коли ви нажимаєте на орел чи решка, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення,  якщо ваш варінт співпав з тим який згенерувала программа то ви подвоюєте ставку якщо ні то втрачаєте списані кошти з балансу."} />
                    <FlipCoinGame  />
                </div>

                <SidePanel  arr={coinFlipResult}/>
            </div>
        </>
    );
};
