import React from 'react';

import styles from './style.module.css';

class ForecastError extends React.Component {

	render () {
		const { message } = this.props;

		return (
			<div className={styles.forecastErrorWrapper}>{message}</div>
		);
	}

}

export default ForecastError;