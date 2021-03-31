import React from 'react';
import './App.css';
import {LoginPage} from './components/loginModal/LoginPage';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {HomePage} from "./components/homePage/HomePage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path='/home' render={() => <HomePage/>}/>
                <Route exact path='/login' render={() => <LoginPage/>}/>
                <Redirect to='/home'/>
            </BrowserRouter>
        </div>
    );
}

export default App;