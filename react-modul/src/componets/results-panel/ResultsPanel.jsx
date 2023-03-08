import shortid from 'shortid';

import style from "./ResultsPanel.module.scss";

export default function ResultsPanel({ arr }) {
    return (
        <aside className={style.aside}>
            <h3 className={style.h3}>Результати</h3>
            <ul>
                {arr.map(el => (
                    <li key={shortid.generate()}>
                        <span>
                            {Object.keys(el)}: {Object.values(el)}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
};