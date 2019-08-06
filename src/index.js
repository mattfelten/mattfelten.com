import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from './routes';
import { setTitle } from './utils';

import './site.scss';
import './tachyons.scss';

setTitle();

function App() {
	return (
		<Router>
			{routes.map((component, i) => (
				<Route key={i} path={component.path} component={component} exact />
			))}
		</Router>
	);
  }

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	ReactDOM.hydrate(<App />, rootElement);
} else {
	ReactDOM.render(<App />, rootElement);
}
