import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import ShowMovie from './views/ShowMovie';
import NavBar from './components/NavBar/NavBar';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/show-movie" component={ShowMovie} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
