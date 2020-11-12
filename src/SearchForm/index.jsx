import React from 'react';

import InvalidMessage from '../InvalidMessage';

import styles from './style.module.css';
import loadingIcon from './loading.gif';

class SearchForm extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			submitted: false,
			invalid: false,
			city: null
		}
	}

	handleCity (city) {
		this.setState({ city: city });
	}

	handleSubmit () {
		const { city } = this.state;
		const { selectCity } = this.props;

		if (city) {
			this.setState({ submitted: true, invalid: false });
			selectCity(city);
		} else {
			this.setState({ submitted:true, invalid: true });
		}
	}

	render () {
		const { submitted, invalid, city } = this.state;
		const { loading } = this.props;

		return (
			<div className={submitted && !invalid ? styles.searchFormHidden : styles.searchFormWrapper}>
				<input className={styles.searchFormInput} type="text" placeholder="Digite a cidade..." onChange={e => this.handleCity(e.target.value)} />

				{!loading &&
					<button className={!city ? styles.searchFormButtonDisabled : styles.searchFormButton} onClick={() => this.handleSubmit()}>Buscar</button>
				}

				{loading &&
					<button className={styles.searchFormLoading}>
						<img src={loadingIcon} alt="Carregando" />
					</button>
				}

				{submitted && invalid &&
					<InvalidMessage />
				}
			</div>
		)
	}

}

export default SearchForm;