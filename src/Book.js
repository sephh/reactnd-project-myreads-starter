/**
 * Created by greg on 03/07/17.
 */

import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Book extends Component {

    static propTypes = {
        title:PropTypes.string.isRequired,
        authors:PropTypes.array.isRequired,
        thumbnail:PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.thumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors.join(', ')}</div>
            </div>
        );
    }

}

export default Book;