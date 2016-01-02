import './index.scss';
import React from 'react';
import { Link } from 'react-router';

export default class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={ 'event-' + this.props.id } className="el-item">
        <span className="el-item__name">{this.props.name}</span>
        <span className="el-item__date">{this.props.date} / {this.props.time }</span>
        <span className="el-item__vanue">{this.props.vanue}</span>
        <span className="el-item__location">{this.props.location}</span>
      </Link>
    );
  }
}
