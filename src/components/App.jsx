import React from 'react'
import './App.css'
import { Appbar } from './widgets/Appbar'

export const App = () => (
	<div>
		<Appbar />
		<main className="app__main">
			{/* TODO: Definiere Routes mit <Switch>, <Route> und optional <Redirect> */}
		</main>
	</div>
)
