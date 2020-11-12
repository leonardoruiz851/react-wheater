import React from 'react';

import ForecastLabel from '../ForecastLabel';

import styles from './style.module.css';

class Forecast extends React.Component {

	convertHour (time) {
		let h = new Date(time * 1000).getHours();
		let m = new Date(time * 1000).getMinutes();
		return h + ':' + m;
	}

	render () {
		const { data } = this.props;
		let icon = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'

		return (
			<div className={styles.forecastWrapper}>
				<div className={styles.forecastHeader}>
					<ForecastLabel size="big" content={data.name} />
				</div>
				
				<div className={styles.forecastContent}>
					<div className={styles.forecastColumn}>
						<ForecastLabel content="Mínima" />
						<ForecastLabel size="medium" content={Math.round(data.main.temp_min) + 'ºC'} />
					</div>
					<div className={styles.forecastColumn}>
						<img className={styles.forecastIcon} src={icon} alt={data.weather[0].description}/>
						<ForecastLabel size="big" content={Math.round(data.main.temp) + 'ºC'} />
						<ForecastLabel content={data.weather[0].description} />
					</div>
					<div className={styles.forecastColumn}>
						<ForecastLabel content="Máxima" />
						<ForecastLabel size="medium" content={Math.round(data.main.temp_max) + 'ºC'} />
					</div>
				</div>

				<div className={styles.forecastFooter}>
					<ForecastLabel content={'Umidade: ' + data.main.humidity} />
					<ForecastLabel content={'Nascer do Sol: ' + this.convertHour(data.sys.sunrise)} />
					<ForecastLabel content={'Pôr do Sol: ' + this.convertHour(data.sys.sunset)} />
				</div>
			</div>
		)
	}

}

export default Forecast;