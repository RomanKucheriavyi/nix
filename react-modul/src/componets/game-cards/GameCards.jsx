import { Link } from "react-router-dom";
import shortid from 'shortid';

import style from "./GameCards.module.scss";

export default function GameCards({ gamesList }) {
    const elements = gamesList.map(el => {
        return (
            <li key={shortid.generate()}>
                <Link
                    to={el.link}
                    style={{ height: "100%", display: "block" }}
                >
                    <h2>{el.label}</h2>
                    <img
                        height={"100px"}
                        src={el.imgSrc}
                        alt="game img"
                    />
                </Link>
            </li>
        )
    });
    
    return (
        <ul>{elements}</ul>
    )
};