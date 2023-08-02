import { Component } from 'react';

import AppInfo from '../app-info/app-info.js';
import SerchPannel from '../search-pannel/search-pannel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmploeesList from '../emploees-list/emploees-list.js';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form.js';

import './app.css';

class App extends Component {
	// Данные о сотрудниках
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John D.', salary: 1500, increase: false, id: 1 },
				{ name: 'Alex S.', salary: 2500, increase: true, id: 2 },
				{ name: 'Carl W.', salary: 3500, increase: false, id: 3 },
			],
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	render() {
		return (
			<div className="app">
				<AppInfo />

				<div className="search-pannel">
					<SerchPannel />
					<AppFilter />
				</div>

				<EmploeesList data={this.state.data} onDelete={this.deleteItem} />
				<EmploeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
