import './index.scss';
import React from 'react';
import Header from '../Header';

export default class Layout extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="layout">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
