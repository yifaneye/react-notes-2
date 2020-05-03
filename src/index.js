import React from 'react';
import ReactDOM from 'react-dom';

let codingData = {
	total: 200,
	goal: 200
};

class CodingDayCounter extends React.Component {
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

ReactDOM.render(
	<CodingDayCounter total={codingData.total} goal={codingData.goal} />,
	document.getElementById('root')
);
