import React from 'react';
import EventCalendar from '../EventCalendar';
import connectToStores from 'alt-utils/lib/connectToStores';
import EventStore from '../../stores/EventStore';
import EventActions from '../../actions/EventActions';


@connectToStores
class PageCalendar extends React.Component {

  constructor(props) {
    super(props)
    EventActions.eventFetch();
  }


  static getStores(){
    return [EventStore];
  }


  static getPropsFromStores(){
    return EventStore.getState();;
  }


  render() {
    let events = this.props.list.map( (event) => {
      let ts = Date.parse( event.date );
      let date = new Date(ts);
      event.day = date.getDate();
      event.month = date.getMonth();
      event.year = date.getFullYear();
      return event;
    });


    return (
      <div className="page">
        <h1 className="page-title">Events Calendar</h1>
        <EventCalendar year="2016" events={this.props.list} />
      </div>
    )
  }
}

export default PageCalendar;
