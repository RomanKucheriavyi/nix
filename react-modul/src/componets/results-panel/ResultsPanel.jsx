import shortid from 'shortid';

import style from "./ResultsPanel.module.scss";

export default function ResultsPanel({ arr }) {
    return (
        <aside className={style.aside}>
            <h2>Результати</h2>
            <ul>
                {arr.map(el => (
                    <li key={shortid.generate()}>
                        {Object.keys(el)}: {Object.values(el)}
                    </li>
                ))}
            </ul>
        </aside>
    )
};