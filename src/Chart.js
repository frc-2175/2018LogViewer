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
          label: this.props.title,
          data: this.props.data,
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

  componentDidUpdate() {
    this.chart.data.datasets[0].data = this.props.data;
    this.chart.update();
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
