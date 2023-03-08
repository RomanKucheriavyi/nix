import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/userSlice";
import { useContext } from "react";
import GameContext from "../../context/GameContext";

import style from "./Restart.module.scss";

export default function Restart() {
    const {
        setCoinFlipResult,
        setDoorResult,
        setNumResult,
        setResults
    } = useContext(GameContext);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteUser());
        setCoinFlipResult([]);
        setDoorResult([]);
        setNumResult([]);
        setResults([]);
    };

    return (
        <button
            className={style.button}
            type="button"
            onClick={handleClick}
        >
            Заново
        </button>
    );
}
