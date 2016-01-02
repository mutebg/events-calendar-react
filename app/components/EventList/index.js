import './index.scss';
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import EventStore from '../../stores/EventStore';
import EventActions from '../../actions/EventActions';
import EventListItem from '../EventListItem';

@connectToStores
class EventList extends React.Component {
  constructor(props){
    super(props);
    EventActions.eventFetch();
  }

  static getStores(){
    return [EventStore];
  }

  static getPropsFromStores(){
    return EventStore.getState();
  }

  render() {
    var list = this.props.list.map( (item, i) => <EventListItem {...item} key={i} />);

    return (
      <div className="event-list">{list}</div>
    );
  }
}

export default EventList;
