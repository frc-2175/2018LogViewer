import React from 'react';
import PropTypes from 'prop-types';

import Chart from './Chart';

class App extends React.Component {

  render() {
    return (
      <Chart width={ 800 } height={ 400 } />
    );
  }

}

export default App;
