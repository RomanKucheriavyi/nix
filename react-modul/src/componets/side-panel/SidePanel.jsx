import shortid from "shortid";

import style from "./SidePanel.module.scss";

export default function SidePanel({ arr }) {
    return (
        <aside className={style.aside}>
            <h2> Минулі спроби</h2>
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
