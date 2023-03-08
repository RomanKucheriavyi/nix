import style from "./SidePanel.module.scss";
import shortid from "shortid";
export default function SidePanel({ arr }) {
    return (
        <aside className={style.aside}>
            <span> Минулі спроби</span>
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
    );
}
