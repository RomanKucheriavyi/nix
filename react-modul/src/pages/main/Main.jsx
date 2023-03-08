import PageHeadline from "../../componets/page-headline";
import GameCards from "../../componets/game-cards";
import GAMES from "../../helpers/gamesList";
import InfoPanel from "../../componets/info-panel";
import ResultsPanel from "../../componets/results-panel";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./Main.module.scss";

export default function Main() {
    const {
        results,
    } = useContext(GameContext);
    return (
        <div className={style.main}>
                <PageHeadline label={"Доступні ігри"} />
                <GameCards gamesList={GAMES} />
                <InfoPanel input="Мета гри - подвоїти початковий депозит, граючи в ігри" />
            <ResultsPanel arr={results}/>
        </div>
    );
};
