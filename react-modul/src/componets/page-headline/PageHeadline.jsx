import style from "./PageHeadline.module.scss";

export default function PageHeadline ({label}) {
    return (
        <h1 className={style.h1}>{label}</h1>
    )
};