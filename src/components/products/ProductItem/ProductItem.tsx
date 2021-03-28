import React, {FC} from 'react';
import s from './ProductItem.module.scss';
import cart from '../../../img/icons/shopping-cart.svg'


interface ProductItemProps {
    title: string
    img: string
    price: string
}

export const ProductItem: FC<ProductItemProps> = ({title, img, price}) => {
    return (
        <div className={s.container}>
            <div className={s.imgGun} style={{backgroundImage: `url(${img})`}}></div>
            <div className={s.titleWrap}>
                <h3 className={s.title}>{title}</h3>
            </div>
            <div className={s.bottom}>
                <div className={s.price}>{price}</div>
                <a className={s.cart} href="#"><img src={cart}/></a>
            </div>
        </div>
    )
}