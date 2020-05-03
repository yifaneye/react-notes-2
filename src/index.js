import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	color: "green",
	fontFamily: 'Arial'
};

class Message extends React.Component {
	render() {
		return (
			<div style={style}>
				<h1>Hello Again</h1>
				<p>I am still Allen</p>
			</div>
		)
	}
}

ReactDOM.render(
	<Message />,
	document.getElementById('root')
);
