import React from 'react'
import Header from "../header/Header";
import {HeadPage} from "../headPage/HeadPage";
import {Products} from "../products/Products";
import {Advertising} from "../advertising/Advertising";



export function HomePage() {
    return (
        <>
            <Header/>
            <HeadPage/>
            <Products/>
            <Advertising/>
        </>
    )
}