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
				{ name: 'John D.', salary: 1500, increase: false, rise: true, id: 1 },
				{ name: 'Alex S.', salary: 2500, increase: true, rise: false, id: 2 },
				{ name: 'Carl W.', salary: 3500, increase: false, rise: false, id: 3 },
			],
			term: '',
			filter: 'all',
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
			rise: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	serschEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter((item) => item.rise);
			case 'moreThen1000':
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	onFilterSelect = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;
		const visibleData = this.filterPost(this.serschEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-pannel">
					<SerchPannel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmploeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmploeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
