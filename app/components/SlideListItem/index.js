import './index.scss';
import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class SlideListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_header: false,
      header_opacity: 1,
      header_offset: 0,
      header_scale: 1,
    }

    this.windowHeight = window.innerHeight;
    this.bindHandleScroll = this.handleScroll.bind(this);

    document.addEventListener('scroll', this.bindHandleScroll, false );
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.bindHandleScroll, false);
  }

  handleScroll(event) {
    let pageOffset = window.pageYOffset;
    if ( pageOffset < this.windowHeight ) {
      let percent = this.windowHeight / 100;
      let header_opacity =  1 - ( ( pageOffset / percent ) / 100 ) ;
      let header_offset = pageOffset / 2.3;
      let header_scale = header_opacity

      this.setState({
        header_opacity,
        header_offset,
        header_scale
      });
    }
  }

  handleClick() {
    this.setState({
      is_header: true
    });

    setTimeout( () => {
      browserHistory.push('event-' + this.props.id);
    }, 500);
  }

  render() {
    let className = 'slide';
    if  ( this.props.is_header || this.state.is_header ) {
      className += ' slide--full';
    }

    let cssName = {};
    if ( this.state.header_offset !== 0 ) {
      cssName.transform = `translateY(${this.state.header_offset}px) scale( ${this.state.header_scale} )`;
    }

    return (
      <div className={className}>

        <Link to={ 'home' } className="slide__back">back</Link>
        <div className="slide__image" style={{backgroundImage: `url( ${this.props.image} )`, opacity: this.state.header_opacity }}>
          <div className="slide__content" style={cssName}>
            <p className="slide__date">{this.props.date}  {this.props.time }</p>
            <h1 className="slide__name">{this.props.name}</h1>
            <p className="slide__location">{this.props.vanue} / {this.props.location}</p>
          </div>
        </div>

        <button className="slide__btn" onClick={this.handleClick.bind(this)}></button>

        <div className="slide__scroll">scroll</div>
      </div>
    );
  }
}
