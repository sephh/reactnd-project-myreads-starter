/**
 * Created by greg on 03/07/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import {PropTypes} from 'prop-types';
import * as BooksAPI from './BooksAPI'
import BookShelf from "./BookShelf";


class BooksList extends Component {

    bookTypes = ['currentlyReading', 'read', 'wantToRead'];

    state = {
        books: []
    };

    componentDidMount() {

        BooksAPI.getAll()
            .then(books => {
                this.setState({books: books});
            })

    }

    render() {
        return (

            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>

                        { this.bookTypes
                            .map(type =>
                                <BookShelf key={type} books={ this.state.books.filter(book => book.shelf === type) }
                                           title={type}/>
                            )
                        }

                    </div>
                </div>


                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>

            </div>


        );
    }

}

export default BooksList;