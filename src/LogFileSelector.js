import React from 'react';
import { getFolders, getFiles } from './rioUtil';

import "./logFileSelector.scss";

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
			return (
				<li key={ element }>
					<input type="radio" onClick={ () => this.selectFile(element) } name="files" id={ element } />
					<label htmlFor={ element }>{ element }</label>
				</li>
			);
		});
		return (
			<ul className="log-file-selector">
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

	selectFile(file) {
		this.props.selectFile(file);
	}
}
