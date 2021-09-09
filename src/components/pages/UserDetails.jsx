import React, { Component } from 'react'
import { createNewUser, UsersUrl } from '../../models/User'
import { Button } from '../controls/Button'
import { TextInput } from '../controls/TextInput'

export class UserDetails extends Component {
	state = {
		loading: false,
		user: createNewUser()
	}

	async componentDidMount() {
		const id = this.props.match.params.id
		if (id) {
			await this.fetchUser(id)
		}
	}

	async componentDidUpdate(prevProps) {
		const prevId = prevProps.match.params.id
		const id = this.props.match.params.id
		if (prevId && !id) {
			this.setState({ user: createNewUser() })
		}
	}

	fetchUser = async id => {
		this.setState({ loading: true })
		const response = await fetch(`${UsersUrl}/${id}`)
		const user = await response.json()
		this.setState({ loading: false, user })
	}

	update = property => value => {
		const updatedUser = { ...this.state.user, [property]: value }
		this.setState({ user: updatedUser })
	}

	save = async user => {
		this.setState({ loading: true })
		const response = await fetch(`${UsersUrl}/${user.id ?? ''}`, {
			method: user.id ? 'put' : 'post',
			body: JSON.stringify(user)
		})

		if (response.status >= 300) {
			this.setState({ error: 'Fehler aufgetreten!', loading: false })
		} else {
			const update = await response.json()
			let user = { ...this.state.user, ...update }

			this.setState({ loading: false, user })
		}
	}

	render() {
		const { loading, user, error } = this.state

		return (
			<div>
				<TextInput
					label="Name"
					value={user.name}
					disabled={loading}
					onChange={this.update('name')}
				/>
				<TextInput
					label="E-Mail"
					value={user.email}
					disabled={loading}
					onChange={this.update('email')}
				/>
				<div>{error}</div>
				<Button disabled={loading} onClick={() => this.save(user)}>
					{user.id ? 'Speichern' : 'Erstellen'}
				</Button>
			</div>
		)
	}
}
