import React from 'react';
import s from './HeadPage.module.scss';
import backImg from '../../img/background_image.jpg'

export function HeadPage() {

    const background = {
        backgroundImage: `url(${backImg})`
    }

    return (
        <div className={s.page} style={background}>

        </div>
    )
}