import React from 'react';
import { getFolders } from './rioUtil';

export default class MatchSlector extends React.Component {
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
			return <option key={ element }>{ element }</option>;
		});
		return (
			<select>
				{ matches }
			</select>
		);
	}
}