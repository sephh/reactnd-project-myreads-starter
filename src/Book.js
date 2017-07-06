/**
 * Created by greg on 03/07/17.
 */

import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
        noNoneShelf: PropTypes.bool
    };

    render() {

        let book = this.props.book;
        book.title = book.title ? book.title : '';
        book.authors = book.authors ? book.authors : [];
        book.imageLinks = book.imageLinks ? book.imageLinks : {};

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(e) => this.props.onUpdateShelf(book, e.target.value)}
                            value={book.shelf}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            {!this.props.noNoneShelf && <option value="none">None</option>}
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
        );
    }

}

export default Book;