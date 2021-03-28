import React from 'react';
import s from './Title.module.scss';


export function Title(props: { title: string }) {
    return (
        <div className={s.title}>
            <h1>{props.title}</h1>
        </div>
    )
}