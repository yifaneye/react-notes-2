import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	color: "green",
	fontFamily: 'Arial'
};

const title = React.createElement(
	'ul',
	{id: 'title', className:'header', style: style},
	React.createElement(
		'li',
		{},
		'item'
	)
);

ReactDOM.render(
	title,
	document.getElementById('root')
);
