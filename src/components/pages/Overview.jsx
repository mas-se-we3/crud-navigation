import React, { Component } from 'react'
import './Overview.css'

export class Overview extends Component {
	state = { users: [] }

	async componentDidMount() {
		// TODO: Alle Users von API abfragen und in State speichern
	}

	render() {
		const { users } = this.state

		return (
			<div className="overview__container">
				{/* TODO: Users mit folgenden Spalten (div) auflisten: name, email, Bearbeiten-Link */}
			</div>
		)
	}
}
