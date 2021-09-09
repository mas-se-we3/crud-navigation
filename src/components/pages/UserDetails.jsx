import React, { Component } from 'react'
import { createNewUser } from '../../models/User'
import { Button } from '../controls/Button'
import { TextInput } from '../controls/TextInput'

export class UserDetails extends Component {
	state = {
		loading: false,
		user: createNewUser()
	}

	async componentDidMount() {
		// TODO: UserId abfragen und fetchUser() aufrufen
	}

	async componentDidUpdate(prevProps) {
		// TODO: Advanced -> Fixe "User erstellen"-Link, wenn bereits ein User geladen ist
	}

	fetchUser = async id => {
		// TODO: User von API mit fetch() holen
	}

	update = property => value => {
		// TODO: Property des Users im State updaten
	}

	save = async user => {
		// TODO: User nach API schicken -> Erstellen und Update unterscheiden
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
