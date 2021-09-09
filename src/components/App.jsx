import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import './App.css'
import { Overview } from './pages/Overview'
import { UserDetails } from './pages/UserDetails'
import { Appbar } from './widgets/Appbar'

export const App = () => (
	<div>
		<Appbar />
		<main className="app__main">
			<Switch>
				<Route exact path="/" component={Overview} />
				<Route exact path="/users/:id" component={UserDetails} />
				<Route exact path="/new-user" component={UserDetails} />
				<Redirect to="/" />
			</Switch>
		</main>
	</div>
)
