import s from "./LoginPage.module.scss";
import React from "react";
import {Login} from "./Login/Login";
import {login_bc} from "../headPage/backgroudImg";
import {Button} from "../button/Button";
import {Register} from "./Register/Register";

export function LoginPage() {
    return (
        <div className={s.container} style={login_bc}>
            <div className={s.choose}>
                <div className={s.logArea}>
                    <Button title={'Login'}/>
                </div>
                <div className={s.regArea}>
                    <Button title={'Register'}/>
                </div>
                <div>
                    <Button title={'x'}/>
                </div>
            </div>

            <div>
                {/*<Login/>*/}
                <Register/>
            </div>
        </div>
    )
}


