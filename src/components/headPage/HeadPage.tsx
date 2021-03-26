import React from 'react';
import s from './HeadPage.module.scss';
import backImg from '../../img/background_image.jpg'
import instr from '../../img/instruction.jpg'

export function HeadPage() {

    const background = {
        backgroundImage: `url(${backImg})`,
        /* opacity: '0.7'*/
    }
    const instruction = {
        backgroundImage: `url(${instr})`
    }

    return (
        <header className={s.page} style={background}>
            <div className={s.wrap}>
                <div className={s.rowNav}>
                    <div className={s.menu}>00</div>
                    <div className={s.ad}>11</div>
                </div>
                <div className={s.rowAd}>
                    <div className={s.instruction} style={instruction}>
                        <h3 className={s.title}>Instruction</h3>
                        <p className={s.text}>let our experienced staff assist you</p>
                    </div>
                    <div className={s.twoAd}>33</div>
                </div>
            </div>
        </header>
    )
}