import React, { Component } from 'react';
import { render } from 'react-dom';

let codingData = {
	total: 200,
	goal: 300
};

const getPercent = decimal => {
	return decimal * 100 + '%'
};
const getProgressToGoal = (total, goal) => {
	return getPercent(total/goal)
};

const CodingDayCounter = ({total, goal}) => {
	return (
		<section>
			<div>
				<p>Total Days: {total}</p>
			</div>
			<div>
				<p>Goal Days: {goal}</p>
				<p>Progress: {getProgressToGoal(total, goal)}</p>
			</div>
		</section>
	)
};

render(
	<CodingDayCounter total={codingData.total} goal={codingData.goal} />,
	document.getElementById('root')
);
