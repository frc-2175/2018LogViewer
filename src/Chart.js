import React from 'react';
import PropTypes from 'prop-types';

import ChartJS from 'chart.js';

class Chart extends React.Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.chart = new ChartJS(this.canvas.getContext('2d'), {
      type: 'line',
      data: {
        datasets: [{
          label: '# of Foots',
          data: [
            { x: 0, y: 12 },
            { x: 1, y: 5 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 2 },
            { x: 10, y: 3 },
          ],
          showLine: true,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          lineTension: 0,
        }],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'linear',
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }

  render() {
    return (
      <div style={{ width: this.props.width, height: this.props.height }}>
        <canvas ref={ canvas => { this.canvas = canvas } } />
      </div>
    );
  }

}

export default Chart;
