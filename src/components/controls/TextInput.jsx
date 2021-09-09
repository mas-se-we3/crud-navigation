import React from 'react'
import './TextInput.css'

export const TextInput = ({ onChange, label, ...rest }) => (
	<div>
		<label>
			<div>{label}</div>
			<input
				className="textinput__input"
				type="text"
				onChange={e => onChange(e.target.value)}
				{...rest}
			/>
		</label>
	</div>
)
