/**
 * Created by greg on 03/07/17.
 */

import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Book from "./Book";

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="bookshelf">

                <h2 className="bookshelf-title">{this.props.title}</h2>

                <div className="bookshelf-books">


                    <ol className="books-grid">

                        {
                            this.props.books.map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onUpdateShelf={this.props.onUpdateShelf}
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

export default BookShelf;