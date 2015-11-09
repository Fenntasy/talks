import React from 'react';
import { render } from 'react-dom';
import MyDeck from './deck'
import { Router, Route, Link } from 'react-router'

render(
  <Router>
    <Route path="/" component={MyDeck}>
      <Route path=":slide" component={MyDeck} />
    </Route>
  </Router>,
  document.getElementById('root')
);