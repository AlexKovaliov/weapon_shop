import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    onClick?: () => void
}

export function Button(props: ButtonPropsType) {
    return <button className={s.btnWpar} onClick={props.onClick}>{props.title}</button>
}