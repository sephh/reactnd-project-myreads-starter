/**
 * Created by greg on 03/07/17.
 */
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class SearchBooks extends Component {

    static propTypes = {
        updateShelf: PropTypes.func.isRequired
    };

    state = {
        result: []
    };

    searchBook = (query) => {
        BooksAPI.search(query, 20)
            .then( result => this.setState( {result:result.filter(b => b.authors && b.title && b.imageLinks)} ));
    };

    onUpdateShelf = (book,shelf) => {
        this.setState((state) => ({result: state.result.filter(b => b.id !== book.id)}) );
        this.props.updateShelf(book,shelf);
    };


    render() {
        return (
            <div className="search-books">

                <div className="search-books-bar">

                    <Link className="close-search" to="/">
                        Close
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" onInput={(e) => this.searchBook(e.target.value)} placeholder="Search by title or author"/>
                    </div>

                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.result.map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onUpdateShelf={this.onUpdateShelf}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>

            </div>
        );
    }

}

export default SearchBooks;