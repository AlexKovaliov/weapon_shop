import React from 'react';
import {riflesStore} from "./rifles";
import {RiflesList} from './RiflesList';


export function RiflesPage() {
    return (
        <>
            {riflesStore.map((el) => {
                return <div>
                    <RiflesList key={el.id}
                                id={el.id}
                                description={el.description}
                                caliber={el.caliber}
                                classification={el.classification}
                                title={el.title} img={el.img}
                                price={el.price}/>
                </div>
            })}
        </>


    )
}