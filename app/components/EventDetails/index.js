import './index.scss';
import React from 'react';
import { Link } from 'react-router';

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var locationURI = 'https://www.google.com/maps/embed/v1/place&key=AIzaSyDrUHkcAqXj6uXJWSYHC3VeUiuKv4QeZWk&q=' +
    //   encodeURIComponent(this.props.vanue + ', ' + this.props.location);
    var location =  encodeURIComponent(this.props.vanue + ', ' + this.props.location);
    var locationImageURI  = `http://maps.googleapis.com/maps/api/staticmap?center=${location}&size=640x400&key=AIzaSyDrUHkcAqXj6uXJWSYHC3VeUiuKv4QeZWk`;


    return (
      <div className="details">
        <div className="details__box">
          <h2 className="details__title" style={{paddingBottom:0}}>{ this.props.date } { this.props.time }</h2>
        </div>
        <div className="details__box">
          <h2 className="details__title">{ this.props.vanue } /  { this.props.location }</h2>
          <img src={locationImageURI} />

        </div>
        <div className="details__box">
          <h2 className="details__title">Additional information</h2>
          <p>This progressive, alternative spacerockband adds another future classic to their repertoire with their sixth album 'The 2ND Law'. With a perfect mix of hard rock, glam and classical influences - sometimes accompanied by dubstep and electronics - they know how to surprise</p>
        </div>

      </div>
    );
  }
}
