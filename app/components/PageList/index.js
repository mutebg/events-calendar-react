import React from 'react';
import EventList from '../EventList';

export default class PageList extends React.Component {
  render() {
    return (
      <div className="page">
        <h1 className="page-title">Events List</h1>
        <EventList />
      </div>
    );
  }
}
