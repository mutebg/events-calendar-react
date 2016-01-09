import './index.scss';
import React from 'react';
import { Link } from 'react-router';
import Modal from '../Modal';


export default class Header extends React.Component {

  constructor(props) {
    super();

    this.nav = [
      {
        url: 'home',
        title: 'SlideShow',
      },
      {
        url: 'calendar',
        title: 'Calendar',
      },
      {
        url: 'list',
        title: 'List',
      },
    ];
  }

  render() {

    let nav = this.nav.map( (item, i) => <Link key={i} className="nav__link" to={item.url}>{item.title}</Link> );
    return (
      <header className="header">
        <span className="header__logo">Logo</span>
        <nav className="nav">{nav}</nav>
      </header>
    );
  }
}
