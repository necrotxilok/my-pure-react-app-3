import React, { useEffect, useState } from 'react'
import { Button } from 'ui'
import './app.css'

const theme = window.MainTheme || {}

export default function App(props) {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		// Component Did Mount
		console.log('Hello World App!')
	}, [])
	
	return (
		<div 
			id='app'
			style={{
				backgroundImage: theme.backgroundImage ? 'url(' + theme.backgroundImage + ')' : ''
			}}
		>
			<div>
				{theme.logoImage && <img src={theme.logoImage} alt="mainlogo"/>}
				<h1>{theme.title || "Hello World!"}</h1>
				<Button 
					label={"Clicker " + counter}
					onClick={() => {
						setCounter(counter + 1)
					}}
				/>
			</div>
		</div>
	)
}
