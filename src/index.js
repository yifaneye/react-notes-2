import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	color: "green",
	fontFamily: 'Arial'
};

class Message extends React.Component {
	render() {
		return (
			<div style={{color: this.props.color}}>
				<h1>Hello {this.props.name}</h1>
				<p>I am still Allen {this.props.number}</p>
			</div>
		)
	}
}

ReactDOM.render(
	<Message color="blue" name="Bob" number={3} />,
	document.getElementById('root')
);
