import React from 'react';
import { getFolders, getFiles, getFile, getDataSets } from './rioUtil';

import "./logFileSelector.scss";

export default class LogFileSelector extends React.Component {
	state = {
		files: [],
        folderName: "",
        dataSets: []
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

        let dataSets = this.state.dataSets;
        dataSets = dataSets.map(element => {
            return <option key={ element } value={ element }>{ element }</option>;
        });

		return (
            <div>
                <ul className="log-file-selector">
                    { files }
                </ul>
                <select onChange={ event => this.selectDataSet(event.target.value) }>
                    { dataSets }
                </select>
            </div>
		);
	}

	componentWillUpdate(nextProps, nextState) {
		if(this.state.dataSets != nextState.dataSets) {
			this.selectDataSet(nextState.dataSets[0]);
		}
	}
    selectLogFolder = folderName => {
        this.setState({folderName: folderName});
		getFiles(folderName)
			.then(files => {
				this.setState({ files: files });
			});
	}

    selectFile = file => {
		this.props.selectFile(file);
        getFile(this.state.folderName, file)
            .then(file => {
                this.setState({ dataSets: getDataSets(file) });
            });
	}

    selectDataSet = dataSet => {
       this.props.selectDataSet(dataSet);
    }
}
