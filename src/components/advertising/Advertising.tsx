import React from 'react';
import {shooting_bc, shooting_bc_wrap} from '../headPage/backgroudImg';
import s from './Advertising.module.scss'
import {Button} from "../button/Button";


export function Advertising() {
    return (
        <div className={s.container} style={shooting_bc}>
            <div className={s.content}>
                <div className={s.wrap} style={shooting_bc_wrap}>
                    <h1>Indoor Shooting Range</h1>

                    <p>
                        <h3>AT 25 YARDS, OUR 10 LANE RANGE IS RIFLE RATED</h3>
                        And we are also equipped with HEPA air filtration to ensure that you are in a healthy
                        environment
                        while shooting indoors.
                        Whether you are an individual wanting to get some practice in or a group wanting to schedule a
                        shooting event, Honor Gun Shop can handle any size crowd.
                    </p>
                </div>
                <Button title={"More information"}/>
            </div>
        </div>
    )
}
