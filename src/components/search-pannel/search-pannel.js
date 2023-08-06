import { Component } from 'react';
import './search-pannel.css';

class SearchPannel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onUpdateSearch = (event) => {
		const term = event.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};

	render() {
		return (
			<input
				className="form-control serch-input"
				placeholder="Найти сотрудника"
				type="text"
				value={this.state.term}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

export default SearchPannel;
