import React from 'react'
import { NavLink } from 'react-router-dom'
import './Appbar.css'

export const Appbar = () => (
	<nav className="appbar__nav">
		<NavLink
			to="/"
			className="appbar__link"
			activeClassName="appbar__link--active"
			exact
		>
			Übersicht
		</NavLink>
		<NavLink
			to="/new-user"
			className="appbar__link"
			activeClassName="appbar__link--active"
			exact
		>
			User erstellen
		</NavLink>
	</nav>
)
