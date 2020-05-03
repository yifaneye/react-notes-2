import React, {Component} from 'react';
import {render} from 'react-dom';

let bookStock = [
	{"title": "Jane Eyre", "nPages": 592, "author": "Charlotte Brontë"},
	{"title": "Pride and Prejudice", "nPages": 448, "author": "Jane Austen"},
	{"title": "War and Peace", "nPages": 1225, "author": "Leo Tolstoy"},
];

const Book = ({title, nPages, author}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{nPages} pages</p>
			<i>by {author}</i>
		</section>
	)
};

class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
		this.toggleOpenness = this.toggleOpenness.bind(this)
	}
	toggleOpenness() {
		this.setState({
			open: !this.state.open
		})
	}
	render() {
		// const books = this.props.books;
		const { books } = this.props;
		return (
			<div>
				<h1>iBook Store is <strong onClick={this.toggleOpenness}>{this.state.open ? 'open' : 'closed'}</strong></h1>
				{books.map(
					(book, i) => <Book key={i} title={book.title} nPages={book.nPages} author={book.author}/>
				)}
			</div>
		)
	}
}

render(
	<Store books={bookStock}/>,
	document.getElementById('root')
);
