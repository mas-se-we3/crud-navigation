import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { UsersUrl } from '../../models/User'
import './Overview.css'

export class Overview extends Component {
	state = { users: [] }

	async componentDidMount() {
		const response = await fetch(UsersUrl)
		const users = await response.json()
		this.setState({ users })
	}

	render() {
		const { users } = this.state

		return (
			<div className="overview__container">
				{users.map(u => (
					<Fragment key={u.id}>
						<div>{u.name}</div>
						<div>{u.email}</div>
						<Link to={`/users/${u.id}`}>Bearbeiten</Link>
					</Fragment>
				))}
			</div>
		)
	}
}
