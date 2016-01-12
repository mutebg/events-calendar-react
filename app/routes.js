import React from 'react';
import {Router, Route, IndexRoute } from 'react-router';

//components
import Layout from './components/Layout';
import Home from './components/PageHome';
import Add from './components/PageAdd';
import Details from './components/PageDetails';
import Calendar from './components/PageCalendar';
import List from './components/PageList';

export default (
  <Route path="/" component={Layout}>
    <Route path="/home" component={Home} />
    <Route path="/event-:id" component={Details} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/list" component={List} />
    <Route path="/add" component={Add} />
    <IndexRoute component={Home}/>
  </Route>
);
