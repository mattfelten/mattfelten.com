import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Store } from './pages'
import { setTitle } from './utils';

import './site.scss';
import './tachyons.scss';

setTitle();

function App() {
	return (
	  <Router>
		  <Route exact path="/" component={Home} />
		  <Route path="/store" component={Store} />
	  </Router>
	);
  }

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
