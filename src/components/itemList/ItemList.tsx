import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ItemList.module.scss'

export function ItemList() {
    return (
        <div className={s.itemList}>
            <Item way={"/home"} title={"rifles"}/>
            <Item way={"/home"} title={"shotguns"}/>
            <Item way={"/home"} title={"accessories"}/>
            <Item way={"/home"} title={"ammunition"}/>
            <Item way={"/home"} title={"optics"}/>
            <Item way={"/home"} title={"silencers"}/>
            <Item way={"/home"} title={"knives"}/>
            <Item way={"/home"} title={"maintenance"}/>
            <Item way={"/home"} title={"rifle style pistols"}/>
            <Item way={"/home"} title={"for police"}/>
            <Item way={"/home"} title={"airsoft"}/>
        </div>
    )
}

function Item(props: {way:string, title: string }) {
    return (
        <NavLink to={props.way} className={s.item}>{props.title}</NavLink>
    )
}