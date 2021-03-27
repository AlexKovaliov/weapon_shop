import React from 'react';
import s from './HeadPage.module.scss';
import {ammunition, background, instruction} from './backgroudImg';
import {ItemList} from '../ItemList/ItemList';
import { slider } from '../slider/Slider';

export function HeadPage() {


    return (
        <header className={s.page} style={background}>
            <div className={s.wrap}>
                <div className={s.rowNav}>
                    <div className={s.menu}>
                        <ItemList/>
                    </div>
                    <div className={s.ad}>{slider}</div>
                </div>
                <div className={s.rowAd}>
                    <div className={s.instruction} style={instruction}>
                        <div className={s.cont}>
                            <h3 className={s.title}>Instruction</h3>
                            <p className={s.text}>Let our experienced staff assist you</p>
                        </div>
                    </div>
                    <div style={ammunition} className={s.ammunition}>
                        <p>a wide range of ammunition</p>
                    </div>
                </div>
            </div>
        </header>
    )
}