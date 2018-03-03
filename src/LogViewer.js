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

	componentDidUpdate(prevProps, prevState) {
		if(this.props.fileName != prevProps.fileName || this.props.dataSet != prevProps.dataSet) {
			this.updateChart();
		}
	}

	render() {
		return <Chart title="LOL" data={ this.state.points } width="100%" height="100%" />;
	}

	updateChart = () => {
		getFile(this.props.folderName, this.props.fileName)
			.then(file => {
				let lines = file.split('\n');
				let objects = lines.map(element => JSON.parse(element));
				let points = objects.map(element => {
					console.log('x: ' + element.timestamp + ', y: ' + element.values[this.props.dataSet]);
					return { x: element.timestamp, y: element.values[this.props.dataSet] };
				});
				this.setState({ points: points });
			});
        let dataSets
	}
}
