import s from "./LoginPage.module.scss";
import React, {useState} from "react";
import {Login} from "./Login/Login";
import {login_bc} from "../headPage/backgroudImg";
import {Button} from "../button/Button";
import {Register} from "./Register/Register";
import {NavLink} from "react-router-dom";

export function LoginPage() {
    const [register, setRegister] = useState(false)

    return (
        <div className={s.container} style={login_bc}>
            <div className={s.choose}>
                <div className={register ? `${s.logArea} && ${s.notActive}` : `${s.logArea}`}>
                    <Button title={'Login'} onClick={() => {
                        setRegister(false)
                    }}/>
                </div>
                <div className={register ? `${s.regArea}` : `${s.regArea} && ${s.notActive}`}>
                    <Button title={'Register'} onClick={() => {
                        setRegister(true)
                    }}/>
                </div>
                <div className={s.close}>
                    <NavLink to="/home">
                        <Button title={'x'}/>
                    </NavLink>
                </div>
            </div>

            <div>
                {register ? <Register/> : <Login/>}
            </div>
        </div>
    )
}