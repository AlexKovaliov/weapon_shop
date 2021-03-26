import React from 'react';
import s from './Nav.module.scss';


export function Nav(props: { title: string}) {
    return (
        <div className={s.nav}>
            <span>{props.title}</span>
        </div>
    )
}