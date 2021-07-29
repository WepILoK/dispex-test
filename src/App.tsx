import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {Companies} from "./pages/HomePage/Companies";
import {fetchCompanies} from "./store/ducks/companiesAndFlats/actionCreators";
import {FlatsList} from "./pages/FlatsList/FlatsList";

import './App.scss'


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCompanies())
    }, [])

    return (
        <div className='app'>
            <Switch>
                <Route path='/apartments/:id' component={FlatsList}/>
                <Route path='/' component={Companies}/>
            </Switch>
        </div>
    );
}

export default App;
