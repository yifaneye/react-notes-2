import React, { Component } from 'react';
import { render } from 'react-dom';

let codingData = {
	total: 200,
	goal: 300
};

class CodingDayCounter extends Component {
	getPercent = decimal => {
		return decimal * 100 + '%'
	};
	getProgressToGoal = (total, goal) => {
		return this.getPercent(total/goal)
	}
	render() {
		const {total, goal} = this.props
		return (
			<section>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Goal Days: {goal}</p>
					<p>Progress: {this.getProgressToGoal(total, goal)}</p>
				</div>
			</section>
		)
	}
}

render(
	<CodingDayCounter total={codingData.total} goal={codingData.goal} />,
	document.getElementById('root')
);
