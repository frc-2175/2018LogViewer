import React from 'react';
import { getFolders, getFiles } from './rioUtil';

export default class LogFileSelector extends React.Component {
	state = {
		files: []
	}

	componentWillReceiveProps(nextProps) {
		this.selectLogFolder(nextProps.folderName);
	}

	componentDidMount() {
		this.selectLogFolder(this.props.folderName);
	}

	render() {
		let files = this.state.files;
		files = files.map(element => {
			return <li key={ element }>{ element }</li>
		});
		return (
			<ul>
				{ files }
			</ul>
		);
	}

	selectLogFolder(folderName) {
		getFiles(folderName)
			.then(files => {
				this.setState({ files: files });
			});
	}
}