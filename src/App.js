import React from 'react';
import PropTypes from 'prop-types';
import MatchSelector from './MatchSelector';
import LogFileSelector from './LogFileSelector';
import Chart from './Chart';
import LogViewer from './LogViewer';

function SidebarPanel(props) {
  return (
    <div className="panel">
      { props.children }
    </div>
  );
}

class App extends React.Component {
	state = {
		match: 1,
		file: ""
	};

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <SidebarPanel>
  	       <MatchSelector selectMatch={ this.selectMatch } />
          </SidebarPanel>
  	      <SidebarPanel>
            <LogFileSelector folderName={ this.state.match } selectFile={ this.selectFile } />
          </SidebarPanel>
  	    </div>
        <div className="viewer">
          <LogViewer fileName={ this.state.file } folderName={ this.state.match } />
        </div>
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
