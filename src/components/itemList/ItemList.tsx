import React from 'react';
import s from './ItemList.module.scss'

export function ItemList() {
    return (
        <div className={s.itemList}>
            <Item title={"rifles"}/>
            <Item title={"shotguns"}/>
            <Item title={"accessories"}/>
            <Item title={"ammunition"}/>
            <Item title={"optics"}/>
            <Item title={"silencers"}/>
            <Item title={"knives"}/>
            <Item title={"maintenance"}/>
            <Item title={"rifle style pistols"}/>
            <Item title={"for police"}/>
            <Item title={"airsoft"}/>
        </div>
    )
}

function Item(props: { title: string }) {
    return (
        <li className={s.item}>{props.title}</li>
    )
}