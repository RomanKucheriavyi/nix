import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getName, getDeposit, getBalance } from "../store/userSlice";
import Restart from "../componets/restart";
import style from "./withHeader.module.scss";

export default function withHeader(PageComponent) {
    return function WithPage() {
        const name = useSelector(getName);
        const deposit = useSelector(getDeposit);
        const balance = useSelector(getBalance);
        return (
            <>
                <header>
                    <div className={style.logo}>
                        <Link to="/">
                            <img
                                src={require("../assets/images/logo.png")}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <span>{name}</span>
                    <span>Депозит : {deposit} $</span>
                    <span>Баланс : {balance} $</span>
                    <Restart />
                </header>

                <PageComponent />
            </>
        );
    };
};