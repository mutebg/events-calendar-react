import './index.scss';
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import EventStore from '../../stores/EventStore';
import EventActions from '../../actions/EventActions';
import SlideListItem from '../SlideListItem';
import EventDetails from '../EventDetails';


@connectToStores
class PageDetails extends React.Component {
  constructor(props){
    super(props);
    this.transitionTime = 1;
    this.inTransition = false;
    if ( -this.props.params.id !== this.props.page ) {
      EventActions.setPage( -this.props.params.id );
    }
  }

  static getStores(){
    return [EventStore];
  }

  static getPropsFromStores(){
    return EventStore.getState();
  }

  render() {
    let headerData = this.props.list[ this.props.params.id ];
    if ( headerData ) {
      headerData.is_header = true;
    } else {
      EventActions.eventFetch();
    }

    return (
      <div>
        <SlideListItem {...headerData} />
        <EventDetails {...headerData} />
      </div>
    );
  }
}

export default PageDetails;
