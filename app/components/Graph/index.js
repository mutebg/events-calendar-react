import React from 'react';

import Axis from './axis';
import GraphBody from './body';


export default class Graph extends React.Component {
  static defaultProps = {
    width: 640,
    height: 400,
    margin: 1
  };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axis
          x={this.props.margin}
          y={this.props.height - this.props.margin}
          length={this.props.width}
          horizontal={true}
        />
        <Axis
          x={this.props.margin}
          y={0}
          length={this.props.height - this.props.margin}
          horizontal={false}
        />
        <GraphBody
          x={this.props.margin}
          y={this.props.height - this.props.margin}
          data={this.props.data}
          width={ (this.props.width - this.props.margin - this.props.margin) }
          height={ (this.props.height - this.props.margin - this.props.margin) }
        />
      </svg>
    )
  }
}
