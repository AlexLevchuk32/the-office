import EmploeesListItem from '../emploees-list-item/emploees-list-item';

import './emploees-list.css';

const EmploeesList = ({ data }) => {
	const elements = data.map((item) => {
		// Алгоритм согласования - нужен для оптимизации скорости работы приложения.
		const { id, ...itemProps } = item;

		// return <EmploeesListItem name={item.name} salary={item.salary} />;
		return <EmploeesListItem key={id} {...itemProps} />;
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmploeesList;
