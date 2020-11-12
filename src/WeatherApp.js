import React, { Fragment } from 'react';

import SearchForm from './SearchForm';
import Forecast from './Forecast';
import ForecastError from './ForecastError';

class WeatherApp extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			data: null,
			requestError: null
		}

		this.selectCity = this.selectCity.bind(this);
	}

	selectCity (city) {
		this.setState({ loading: true });
		this.getForecastData(city);
	}

	getForecastData (city) {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + process.env.REACT_APP_API_KEY + '&lang=pt_br&units=metric', {
			method: 'GET'
		})
		.then(res => {
			if (res.status === 200) {
				res.json().then(data => {
					this.setState({ loading: false, data: data, requestError: null });
				});
			} else {
				this.setState({ loading: false, requestError: 'Cidade não encontrada' });
			}
		})
		.catch(() => {
			this.setState({ loading: false, requestError: 'Erro de comunicação, tente novamente mais tarde.' });
		});
	}

	render () {
		const { loading, data, requestError } = this.state;
		let resultView = requestError ? <ForecastError message={requestError} /> : data ? <Forecast data={data} /> : '';

		return (
			<Fragment>
				<SearchForm loading={loading} selectCity={this.selectCity} />
				{resultView}
			</Fragment>
		);
	}

}

export default WeatherApp;