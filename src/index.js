import React, { Component } from 'react';
import { render } from 'react-dom';

let codingData = {
	total: 200,
	goal: 200
};

class CodingDayCounter extends Component {
	render() {
		return (
			<section>
				<div>
					<p>Total Days: {this.props.total}</p>
				</div>
				<div>
					<p>Goal Days: {this.props.goal}</p>
				</div>
			</section>
		)
	}
}

render(
	<CodingDayCounter total={codingData.total} goal={codingData.goal} />,
	document.getElementById('root')
);
