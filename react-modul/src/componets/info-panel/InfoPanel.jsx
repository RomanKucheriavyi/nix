import style from "./InfoPanel.module.scss";

export default function InfoPanel ({input}) {
    return (
        <p className={style.p}>{input}</p>
    )
};