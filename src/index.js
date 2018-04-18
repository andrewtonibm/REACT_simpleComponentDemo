import React from 'react'
import { render } from 'react-dom'
import { OnTimeAirplane } from './components/OnTimeAirplane'

window.React = React

render(
	<OnTimeAirplane total={546}
				 airplaneOntime={495}
				 airplaneLate={51}
				 goal={100}/>,
	document.getElementById('react-container')
)