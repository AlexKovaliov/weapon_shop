import React from "react";
import s from './Register.module.scss'
import {Button} from "../../button/Button";
import logo from "../../../img/logo-footer.png";

export function Register() {
    return (
        <div className={s.register}>
            <h4 className={s.create}>Create your account. It's free and only takes a minute.</h4>
            <div className={s.registerWrap}>
                <p>First Name:</p>
                <input type="text" placeholder={"First Name *"}/>
                <p>Last Name:</p>
                <input type="text" placeholder={"Last Name *"}/>
                <p>Login:</p>
                <input type="login" placeholder={"Login *"}/>
                <p>Password:</p>
                <input type="password" placeholder={"Password *"}/>
                <p>Confirm Password:</p>
                <input type="password" placeholder={"Confirm Password *"}/>
            </div>
            <div className={s.checkbox}>
                <input type="checkbox"/>
                <p>I accept the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></p>
            </div>
            <div className={s.btnWrap}>
                <Button title={"register"}/>
                <img src={logo}/>
            </div>

        </div>
    )
}