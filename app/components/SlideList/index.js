import './index.scss';
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import EventStore from '../../stores/EventStore';
import EventActions from '../../actions/EventActions';
import SlideListItem from '../SlideListItem';

@connectToStores
class SlideList extends React.Component {
  constructor(props){
    super(props);
    EventActions.eventFetch();
    EventActions.setArrows(true);

    this.transitionTime = 1;
    this.inTransition = false;

    this.bindHandleMousewheel = this.handleMousewheel.bind(this);

    window.addEventListener('mousewheel', this.bindHandleMousewheel, false );
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.bindHandleMousewheel, false);
  }

  static getStores(){
    return [EventStore];
  }

  static getPropsFromStores(){
    return EventStore.getState();
  }

  handleMousewheel(event) {
    event.preventDefault();

    //check current transition
    if ( this.inTransition ) {
      console.log('event');
      return false;
    }

    this.inTransition = true;

    let page = this.props.page;
    if(event.wheelDelta / 120 > 0) {
       page = this.hasPrevPage() ? ++page : page;
     } else{
       page = this.hasNextPage() ? --page : page;
     }
     this.setPage(page);
  }

  hasPrevPage() {
    return this.props.page < 0 ;
  }

  hasNextPage() {
    return ( this.props.page > ( this.props.list.length * -1 ) + 1 );
  }

  setPage(page) {
    EventActions.setPage(page);
    setTimeout( () => {
      this.inTransition = false;
    }, this.transitionTime * 1000 );
  }

  render() {
    let list = this.props.list.map( (item, i) => <SlideListItem {...item} key={i} />);
    let css = {
      content: {
        width: ( this.props.list.length * 100 ) + 'vw',
        transform: 'translateX(' + ( this.props.page * 100 ) + 'vw)',
        transitionDuration: this.transitionTime + 's'
      }
    }

    let moveNext = () => {
      console.log('next page');
      this.setPage( this.props.page - 1 );
    };
    let movePrev = () => {
      console.log('prev page');
      this.setPage( this.props.page  + 1);
    };
    let nextSlide = this.hasPrevPage() && this.props.show_arrows ? "slide-list__prev slide-list__prev--show" : "slide-list__prev"
    let prevSlide = this.hasNextPage() && this.props.show_arrows ? "slide-list__next slide-list__next--show" : "slide-list__prev";
    return (
      <div className="slide-list">
        <div className="slide-list__content" style={css.content}>
          {list}
        </div>
        <div className={nextSlide} onClick={movePrev.bind(this)}></div>
        <div className={prevSlide} onClick={moveNext.bind(this)}></div>
      </div>
    );
  }
}

export default SlideList;
