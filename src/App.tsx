import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {HeadPage} from './components/headPage/HeadPage';
import {Products} from "./components/products/Products";

function App() {
    return (
        <div className="App">
            <Header/>
            <HeadPage/>
            <Products/>
        </div>
    );
}

export default App;
