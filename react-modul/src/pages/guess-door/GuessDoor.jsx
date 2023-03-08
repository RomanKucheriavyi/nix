import PageHeadline from "../../componets/page-headline";
import InfoPanel from "../../componets/info-panel";
import DoorGame from "../../componets/door-game";
import SidePanel from "../../componets/side-panel";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./GuessDoor.module.scss";

export default function GuessDoor() {
  const {
    doorResult,
  } = useContext(GameContext);

  return (
    <>
      <div className={style.wrapper}>
        <div>
          <PageHeadline label={"Вгадай двері"} />
          <InfoPanel input={"Кожен раз коли ви клікаєте по одній з дверей, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення від 1 до 3,  якщо ваш варінт співпав з тим який згенерувала программа то ви потроїте ставку якщо ні то втрачаєте списані кошти з балансу. "} />
          <DoorGame />
        </div>
        <SidePanel arr={doorResult} />
      </div>
    </>
  );
}
