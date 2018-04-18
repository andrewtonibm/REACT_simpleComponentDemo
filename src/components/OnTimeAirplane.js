import '../stylesheets/ui.scss'

import Ontime from 'react-icons/lib/md/access-time'
import AirplaneActive from 'react-icons/lib/md/airplanemode-active'
import AirplaneInActive from 'react-icons/lib/md/airplanemode-inactive'
import AirStat from 'react-icons/lib/md/av-timer'
const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (ontime, total) => {
var percentageOntime = (ontime) / total;

var result = percentageOntime.toFixed(1)*100 + '%';
return result;

}

export const OnTimeAirplane = ({total, airplaneOntime, airplaneLate, goal}) => (
		<div className="ontime-count">

			<div className="airplaneOntime-days">
				<span>{airplaneOntime}</span>
					<AirplaneActive />
				<span>Ontime Arrive/Departure</span>
			</div>
      <div/>
			<div className="airplaneLate-days">
				<span>{airplaneLate}</span>
					<AirplaneInActive />
				<span>Late Arrive/Departure</span>
			</div>
      <br/>
      
      <div className="total-days">
				<span>{total}</span>
					<Ontime />
				<span>Total Arrive/Departure</span>
			</div>
      <br/>
			<div className="total-days">
				<span>
					{calcGoalProgress(
						airplaneOntime, 
						total
					)}
				</span>
        <AirStat />
				<span>Percentage Ontime</span>
			</div>
		</div>
)
