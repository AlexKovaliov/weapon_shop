import React from 'react';
import {Title} from '../title/Title';
import s from './Products.module.scss';
import {riflesStore} from './rifles/rifles';
import {ProductItem} from "./ProductItem/ProductItem";


export function Products() {
    return (
        <div className={s.container}>
            <Title title={"Featured products"}/>
            <div className={s.content}>
                {riflesStore.map((el) => {
                    return <div>
                        <ProductItem key={el.id} title={el.title} img={el.img} price={el.price}/>
                    </div>
                })}
            </div>
        </div>
    )
}