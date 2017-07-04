/**
 * Created by greg on 03/07/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types';
import sortBy from 'sort-by';

import BookShelf from "./BookShelf";


class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    };

    bookTypes = ['currentlyReading', 'wantToRead', 'read'];

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
                                <BookShelf
                                    key={type}
                                    books={ this.props.books
                                        .filter(book => book.shelf === type)
                                        .sort(sortBy('title'))
                                    }
                                    title={type}
                                    onUpdateShelf={this.props.updateShelf}
                                />
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