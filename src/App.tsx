import React from 'react';
import './App.css';
import {LoginPage} from './components/loginModal/LoginPage';
import {BrowserRouter, Route} from "react-router-dom";
import {HomePage} from "./components/homePage/HomePage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path='/home' render={() => <HomePage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
