import AppInfo from '../app-info/app-info.js';
import SerchPannel from '../search-pannel/search-pannel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmploeesList from '../emploees-list/emploees-list.js';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form.js';

import './app.css';

function App() {
	// Данные о сотрудниках
	const data = [
		{ name: 'John D.', salary: 1500, increase: false, id: 1 },
		{ name: 'Alex S.', salary: 2500, increase: true, id: 2 },
		{ name: 'Carl W.', salary: 3500, increase: false, id: 3 },
	];

	return (
		<div className="app">
			<AppInfo />

			<div className="search-pannel">
				<SerchPannel />
				<AppFilter />
			</div>

			<EmploeesList data={data} />
			<EmploeesAddForm />
		</div>
	);
}

export default App;
