import React, { Component } from 'react';
import { render } from 'react-dom';

let codingData = {
	total: 200,
	goal: 200
};

class CodingDayCounter extends Component {
	render() {
		const {total, goal} = this.props
		return (
			<section>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Goal Days: {goal}</p>
				</div>
			</section>
		)
	}
}

render(
	<CodingDayCounter total={codingData.total} goal={codingData.goal} />,
	document.getElementById('root')
);
