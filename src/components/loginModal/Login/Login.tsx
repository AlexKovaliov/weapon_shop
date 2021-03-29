import s from "./Login.module.scss";
import React from "react";
import { Button } from "../../button/Button";
import logo from "../../../img/logo-footer.png";

export function Login() {
    return (
        <div className={s.login}>
            <div className={s.loginWrap}>
                <p>login:</p>
                <input className={s.inpLog} type="login" placeholder={"Login *"}/>
                <p>password:</p>
                <input className={s.inpPas} type="password" placeholder={"Password *"}/>
                <div className={s.remember}>
                    <a className={s.forgot} href="">Forgot Password?</a>
                    <input type="checkbox"/> <p>Remember me</p>
                </div>
                <div className={s.btnWrap}>
                    <Button title={"login"}/>
                </div>
                <img src={logo}/>
            </div>
        </div>
    )
}