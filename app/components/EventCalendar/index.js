import './index.scss';

import React from 'react';
import { Link } from 'react-router';

export default class EventCalendar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let monthsList = [];

    for(let i = 0; i < 12; i++ ) {
      monthsList.push(i);
    }

    let preparedEvents = {};
    if ( this.props.events ) {
      this.props.events.forEach( item => {
        if ( ! preparedEvents[  item.year + '-' + item.month ]  ) {
          preparedEvents[  item.year + '-' + item.month ]  = []
        }
        preparedEvents[  item.year + '-' + item.month ].push(item);
      });
    }

    let months = monthsList.map( i =>  {
      let currentEvents = preparedEvents[ this.props.year + '-' + i ];
      return <Month key={i} year={this.props.year} month={i} events={currentEvents} />
    });

    return (
      <div className="calendar">
        {months}
      </div>
    );
  }
}

class Month extends React.Component {
  constructor(props) {
    super(props)

    this.monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  }

  daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  }

  render() {
    let daysNum = this.daysInMonth(this.props.month, this.props.year);
    let daysList = [];
    for(let i = 0; i < daysNum; i++ ) {
      daysList.push(i);
    }

    let preparedEvents = {};
    if ( this.props.events ) {
      this.props.events.forEach( item => {
        preparedEvents[ item.day ] = item;
      });
    }

    console.log('prepared', preparedEvents);

    let days = daysList.map( (i) => {
      let event = preparedEvents[i];
      return <Day key={i} year={this.props.year} month={this.props.month} day={i} event={event} />
    });
    var monthName = this.monthNames[this.props.month];

    return (
      <div className="c-month">
        <div className="c-month__name">{ monthName }</div>
        {days}
      </div>
    );
  }
}

class Day extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('event', this.props.event );
    if ( this.props.event ) {
      let title = this.props.event.name + ' ' + this.props.event.vanue;
      return (
        <Link to={'event-' + this.props.event.id } className="c-day c-day--active">
          {this.props.day+1}
          <span className="tooltip">
            <strong>{this.props.event.name}</strong><br />
            time: {this.props.event.time}<br />
            vanue: {this.props.event.vanue}<br />
            location: {this.props.event.location}
          </span>
        </Link>
      );
    } else {
      return <span className="c-day">{this.props.day+1}</span>
    }
  }
}
