import React from 'react';

import styles from './style.module.css';

class InvalidMessage extends React.Component {

	render () {
		return (
			<p className={styles.invalidMessage}>Cidade inválida</p>
		);
	}

}

export default InvalidMessage;