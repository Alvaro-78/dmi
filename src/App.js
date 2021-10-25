import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import NavBar from './components/NavBar/NavBar';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
