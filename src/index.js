import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	color: "green",
	fontFamily: 'Arial'
};

ReactDOM.render(
	<div style={style}>
		<h1>Hello Allen</h1>
		<p>I am Allen</p>
	</div>,
	document.getElementById('root')
);
