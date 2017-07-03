import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";

import './App.css'
import BooksList from "./BooksList";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {

    state = {};


    render() {
        return (
            <BrowserRouter>
                <div className="app">


                    <Route exact path='/' component={BooksList}/>

                    <Route path='/search' component={SearchBooks}/>


                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
