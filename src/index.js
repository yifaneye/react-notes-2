import React, {Component} from 'react';
import {render} from 'react-dom';

let bookStock = [
	{"title": "Jane Eyre", "nPages": 592, "author": "Charlotte Brontë"},
	{"title": "Pride and Prejudice", "nPages": 448, "author": "Jane Austen"},
	{"title": "War and Peace", "nPages": 1225, "author": "Leo Tolstoy"},
];

const Book = ({title="No title provided", nPages="Unknown pages", author="Unknown author", free}) => {
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
	static defaultProps = {
		books: [
			{"title": "Title", "nPages": 100, "author": "Author"},
		]
	};
	state = {
		open: true,
		free: true,
		data: [],
		loading: false
	};
	componentDidMount() {
		this.setState({loading: true});
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/3')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
	}

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
				{this.state.loading ? "loading ..." :
					<div>{this.state.data.map(product => {
					return (
						<div key={product.id}>
							<h3>Special</h3>
							<h4>{product.name}</h4>
							<img src={product.image} alt={product.name} height={100} />
						</div>
					)
				})}
						</div>
				}
				{books.map(
					(book, i) => <Book key={i} title={book.title} nPages={book.nPages} author={book.author} free={this.state.free}/>
				)}
			</div>
		)
	}
}

class FavColorForm extends Component {
	state = { color: '' };
	newColor = e =>
		this.setState({color: e.target.value});
	submit = e => {
		console.log('New Color: ' + this.state.color);
		e.preventDefault()
	};
	render() {
		return (
			<form onSubmit={this.submit}>
				<label>Favourite Color:
					<input type="color" onChange={this.newColor} />
				</label>
				<button>Submit</button>
			</form>
		)
	}
}

render(
	<div>
		<Store books={bookStock}/>
		<FavColorForm />
	</div>,
	document.getElementById('root')
);
