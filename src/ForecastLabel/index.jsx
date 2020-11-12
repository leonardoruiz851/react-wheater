import React from 'react';

import styles from './style.module.css';

class ForecastLabel extends React.Component {

	render () {
		const { size, content } = this.props;
		let sizeClass;

		switch (size) {
			case 'big':
				sizeClass = styles.forecastLabelBig
				break;
			case 'medium':
				sizeClass = styles.forecastLabelMedium
				break;
			default:
				sizeClass = styles.forecastLabelSmall
		}

		return (
			<p className={sizeClass}>{content}</p>
		);
	}

}

export default ForecastLabel;