import React from 'react';
import PropTypes from 'prop-types';
import MatchSelector from './MatchSelector';
import LogFileSelector from './LogFileSelector';
import Chart from './Chart';
import LogViewer from './LogViewer';

class App extends React.Component {
	state = {
		match: 1,
		file: ""
	};

  render() {
    return (
      <div>
	      <MatchSelector selectMatch={ this.selectMatch } />
	      <LogFileSelector folderName={ this.state.match } selectFile={ this.selectFile } />
	      <LogViewer fileName={ this.state.file } folderName={ this.state.match } />
	    </div>
    );
  }

  selectMatch = matchNumber => {
  	this.setState({ match: matchNumber });
  }

  selectFile = file => {
  	this.setState({ file: file});
  }
}

export default App;
