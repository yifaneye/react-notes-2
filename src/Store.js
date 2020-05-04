import React, {Component} from "react";
import PropTypes from "prop-types";
import {Book} from "./Book";
import {OpenTime} from "./OpenTime";
import {CloseTime} from "./CloseTime";

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

Store.propTypes = {
	books: PropTypes.array
};

Book.propTypes = {
	title: PropTypes.string,
	nPages: PropTypes.number,
	author: PropTypes.string,
	free: PropTypes.bool
};

export default Store
