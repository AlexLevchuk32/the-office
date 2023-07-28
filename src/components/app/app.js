import AppInfo from '../app-info/app-info.js';
import SerchPannel from '../search-pannel/search-pannel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmploeesList from '../emploees-list/emploees-list.js';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form.js';

import './app.css';

function App() {
	return (
		<div className="app">
			<AppInfo />

			<div className="search-pannel">
				<SerchPannel />
				<AppFilter />
			</div>

			<EmploeesList />
			<EmploeesAddForm />
		</div>
	);
}

export default App;
