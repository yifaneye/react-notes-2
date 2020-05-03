import React, { Component } from 'react';
import { render } from 'react-dom';

const Book = ({title, nPages, author}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{nPages} pages</p>
			<i>by {author}</i>
		</section>
	)
};

const Store = () => {
	return (
		<div>
			<h1>iBook Store</h1>
			<Book title="Jane Eyre" nPages={592} author="Charlotte Brontë" />
			<Book title="Pride and Prejudice" nPages={448} author="Jane Austen" />
			<Book title="War and Peace" nPages={1225} author="Leo Tolstoy" />
		</div>
	)
};

render(
	<Store />,
	document.getElementById('root')
);
