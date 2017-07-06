import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import * as BooksAPI from './BooksAPI'

import './App.css'
import BooksList from "./BooksList";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {

    state = {
        books: []
    };

    /**
     * @description Update book shelf value into state books
     * @param {object} book
     * @param {string} shelf
     */

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.setState(
            (state) => ({
                books: state.books.filter(b => book.id !== b.id)
                            .concat([{ ...book, shelf }])
            })
        );
    };

    componentDidMount() {

        BooksAPI.getAll()
            .then(books => {
                this.setState({books: books});
            })

    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">


                    <Route exact path='/' render={() =>
                            <BooksList books={this.state.books} updateShelf={this.updateShelf
                        }/>}
                    />

                    <Route path='/search' render={() =>
                        <SearchBooks books={this.state.books} updateShelf={this.updateShelf
                        }/>}
                    />


                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
