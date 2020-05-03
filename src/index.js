import React, {Component} from 'react';
import {render} from 'react-dom';

let bookStock = [
	{"title": "Jane Eyre", "nPages": 592, "author": "Charlotte Brontë"},
	{"title": "Pride and Prejudice", "nPages": 448, "author": "Jane Austen"},
	{"title": "War and Peace", "nPages": 1225, "author": "Leo Tolstoy"},
];

const Book = ({title, nPages, author, free}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{nPages} pages</p>
			<i>by {author}</i>
			<p>{free ? 'Free giveaway :)' : ''}</p>
		</section>
	)
};

const OpenTime = () =>
	<div>
		<i>Opens at 9am</i>
	</div>;

const CloseTime = () =>
	<div>
		<i>Closes at 5pm</i>
	</div>;

class Store extends Component {
	state = {
		open: true,
		free: true,
	};
	toggleOpenness = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	};
	render() {
		// const books = this.props.books;
		const { books } = this.props;
		return (
			<div>
				<h1>iBook Store is <strong onClick={this.toggleOpenness}>{this.state.open ? 'open' : 'closed'}</strong></h1>
				{this.state.open ? <CloseTime /> : <OpenTime />}
				{books.map(
					(book, i) => <Book key={i} title={book.title} nPages={book.nPages} author={book.author} free={this.state.free}/>
				)}
			</div>
		)
	}
}

render(
	<Store books={bookStock}/>,
	document.getElementById('root')
);
