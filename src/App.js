import React from 'react';
import PropTypes from 'prop-types';
import MatchSelector from './MatchSelector';
import LogFileSelector from './LogFileSelector';

import Chart from './Chart';

class App extends React.Component {
	state = {
		match: 1
	};

  render() {
    return (
      <div>
	      <MatchSelector selectMatch={ this.selectMatch }/>
	      <LogFileSelector folderName={ this.state.match } />
	     </div>
    );
  }

  selectMatch = matchNumber => {
  	this.setState({ match: matchNumber });
  }
}

export default App;
