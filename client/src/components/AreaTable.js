import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default class AreaTable extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  

  render() {
    return (
      <BarChart
        width={800}
        height={400}
        data={this.props.data}
        margin={{
          top: 30, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.props.x} />
        <YAxis />
        <Bar dataKey="postedCrimes" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {
            this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))
          }
        </Bar>
      </BarChart>
    );
  }
}
