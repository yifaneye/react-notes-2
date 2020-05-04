import React from "react";

export const Book = ({title="No title provided", nPages="Unknown pages", author="Unknown author", free}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{nPages} pages</p>
			<i>by {author}</i>
			<p>{free ? 'Free giveaway :)' : ''}</p>
		</section>
	)
};
