import React, {FC} from 'react';
import s from './RiflesList.module.scss';
import Header from "../../header/Header";
import {Button} from "../../button/Button";

interface ProductItemProps {
    id: string
    title: string
    description: string
    img: string
    caliber: string
    classification: string
    price: string
}

export const RiflesList: FC<ProductItemProps> = ({id, title, description, img, caliber, classification, price}) => {
    return (
        <div className={s.container}>
            <Header/>
            <div className={s.content}>
                <div className={s.product} key={id}>
                    <div className={s.img} style={{backgroundImage: `url(${img})`}}></div>
                    <div className={s.info}>
                        <div className={s.title}>{title}</div>
                        <div className={s.caliber}><span>Caliber:</span> {caliber}</div>
                        <div className={s.classification}><span>Classification: </span>{classification}</div>
                        <div className={s.price}><span>Cost:</span> {price}</div>
                        <Button title={"buy"}/>
                    </div>
                </div>
                <div className={s.descriptionWrap}>
                    <div className={s.desTitle}>
                        <span>description</span>
                    </div>
                    <div className={s.description}>{description}</div>
                </div>
            </div>

        </div>
    )
}