import React from 'react';
import Chart from './Chart';
import { getFile } from './rioUtil';

export default class LogViewer extends React.Component {
	state = {
		file: "",
		points: []
	}

	componentDidMount() {
		this.updateChart();
	}

	componentWillUpdate(nextProps, nextState) {
		if(this.props.fileName != nextProps.fileName) {
			this.updateChart();
		}
	}

	render() {
		return <Chart title="LOL" data={ this.state.points } width={ 400 } height={ 300 } />;
	}

	updateChart = () => {
		let file = getFile(this.props.folderName, this.props.fileName)
			.then(file => {
				let lines = file.split('\n');
				let objects = lines.map(element => JSON.parse(element));
				let points = objects.map(element => {
					console.log('x: ' + element.timestamp + ', y: ' + element.values.value);
					return { x: element.timestamp, y: element.values.value };
				});
				this.setState({ points: points });
			});
	}
}