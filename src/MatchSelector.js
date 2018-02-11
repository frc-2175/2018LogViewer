import React from 'react';
import { getFolders } from './rioUtil';

import "./matchSelector.scss"

export default class MatchSelector extends React.Component {
	state = {
		matches: []
	};

	componentDidMount() {
		getFolders()
			.then(folders => {
				this.setState({ matches: folders });
			});
	}

	render() {
		let matches = this.state.matches;
		matches = matches.map(element => {
			return <option key={ element } value={ element }>{ element }</option>;
		});
		return (
			<select onChange={ this.handleChange } className="match-selector">
				{ matches }
			</select>
		);
	}

	handleChange = event => {
		this.props.selectMatch(event.target.value);
	}
}
