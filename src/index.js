import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	color: "green",
	fontFamily: 'Arial'
};

const title = React.createElement(
	'h1',
	{id: 'title', className:'header', style: style},
	'Hello Allen'
);

ReactDOM.render(
	title,
	document.getElementById('root')
);
