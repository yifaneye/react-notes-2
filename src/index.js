import React, {Component} from 'react';
import {render} from 'react-dom';
import Store from "./Store";

let bookStock = [
	{"title": "Jane Eyre", "nPages": 592, "author": "Charlotte Brontë"},
	{"title": "Pride and Prejudice", "nPages": 448, "author": "Jane Austen"},
	{"title": "War and Peace", "nPages": 1225, "author": "Leo Tolstoy"},
];

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
