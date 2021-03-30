import React from 'react'
import Header from "../header/Header";
import {HeadPage} from "../headPage/HeadPage";
import {Products} from "../products/Products";
import { RiflesPage } from '../products/rifles/RiflesPage';



export function HomePage() {
    return (
        <>
            <Header/>
            <HeadPage/>
            <Products/>
            <RiflesPage/>
        </>
    )
}