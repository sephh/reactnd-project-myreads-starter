/**
 * Created by greg on 03/07/17.
 */
import React, {Component} from 'react';
import Rx from 'rxjs';
import {PropTypes} from 'prop-types';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class SearchBooks extends Component {

    static propTypes = {
        updateShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    };

    state = {
        result: []
    };

    /**
     * @description Update book shelf value into state result
     * @param {object} book
     * @param {string} shelf
     */

    onUpdateShelf = (book, shelf) => {
        this.setState((state) => ({result: state.result.filter(b => b.id !== book.id)}));
        this.props.updateShelf(book, shelf);
    };

    componentDidMount() {

        const inputElement = document.getElementById('searchInput');
        const search$ = Rx.Observable.fromEvent(inputElement, 'input');

        /**
         *@description observe #searchInput input event and make the request to BookApi.search
         */

        search$
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(e => e.target.value ?
                BooksAPI.search(e.target.value, 20) :
                Rx.Observable.of([])
            )
            .subscribe(result => result.error ? this.setState({result: []}) : this.setState({result}))

    }


    render() {
        return (
            <div className="search-books">

                <div className="search-books-bar">

                    <Link className="close-search" to="/">
                        Close
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input id="searchInput"
                               type="text"
                               placeholder="Search by title or author"/>
                    </div>

                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.result
                                .filter(r => !this.props.books.find(b => r.id === b.id && b.shelf !== 'none'))
                                .map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            onUpdateShelf={this.onUpdateShelf}
                                            noNoneShelf
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