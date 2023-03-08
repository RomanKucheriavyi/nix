import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../store/userSlice";
import React from 'react';

import style from "./Login.module.scss";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [deposit, setDeposit] = useState("");

    function onSubmit(e) {
        e.preventDefault()
        dispatch(
            createUser({
                name,
                deposit,
                balance: +deposit,
            })
        );
        navigate("/");
        setName("");
        setDeposit("");
    };

    return (
        <div className={style.login}>
            <img
                src={require("../../assets/images/logo.png")}
                alt="logo"
            />
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoComplete="off"
                    placeholder="Ваше Ім'я"
                />

                <input
                    type="number"
                    min={100}
                    value={deposit}
                    onChange={e => setDeposit(e.target.value)}
                    autoComplete="off"
                    placeholder="Початковий депозит"
                />

                <button
                    type="submit"
                    disabled={deposit === "" || name === ""}
                >
                    Почати
                </button>
            </form>
        </div>
    )
};