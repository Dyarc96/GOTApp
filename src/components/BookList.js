import React from 'react';
import book_img from '../img/pics/open-book.png';
import { connect } from 'react-redux';
import { listAllBooks, reset } from '../actions';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  id: '' }
        this.props.reset();
    }

    async componentDidMount() {
        await this.props.listAllBooks()
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.setState({ id: e.currentTarget.id });
    }

    render() {
        const books = this.props.books;
        console.log(books);

        const listAllBooks = this.props.books.length >= 1 ? books[0].map((book, index) => {
            return (
                <Link to={`/books/${this.state.id}`} key={index}>
                    <div className="card card__book" id={index + 1} onClick={this.handleClick}>
                        <div className="card__phoho-container">
                            <img src={book_img} className="card__photo" alt="default_img"/>
                        </div>
                        <div className="card__header">
                            <h2 className="heading-secondary">
                                {book.name}
                            </h2>
                        </div>          
                    </div>
                </Link>
            )
        }) : null

    return (
        <div className="container__lists">
            <div className="list">
                {listAllBooks}
            </div>
        </div>
    )
    }
}

const mapStateToProps = state  => {
    return {
        books: Object.values(state.bookList.books)
    }
}


export default connect(mapStateToProps, { listAllBooks, reset })(BookList)