import React from 'react';

export default class GraphBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      side_x: 20,
      side_y: 1,
    }
  }

  componentWillReceiveProps(nextProps) {
    var max = Math.max( ...nextProps.data );
    this.setState({
      side_x:  nextProps.width / nextProps.data.length,
      side_y:  nextProps.height / max
    });
    //console.log(nextProps.height / max, nextProps.height, max);
  }

  prepareData() {
    let d = [`M ${this.props.x} ${this.props.y}`];

    let collector = this.props.data.map( (data, index) => {
      let xNext = this.props.x + ( index * this.state.side_x );
      let yNext = this.props.y - ( data * this.state.side_y );
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    return(
      <path d={d}
        stroke="#ffffff"
        strokeWidth={2}
        fill="none"
      />
    )
  }
}
