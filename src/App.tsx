import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {HeadPage} from './components/headPage/HeadPage';

function App() {
    return (
        <div className="App">
            <Header/>
            <HeadPage/>
        </div>
    );
}

export default App;
