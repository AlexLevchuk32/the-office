import './emploees-add-form.css';

const EmploeesAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Добавить нового сотрудника</h3>
			<form className="add-form d-flex">
				<input
					type="text"
					className="form-control new-post-label"
					placeholder="Имя сотрудника"
				/>
				<input
					type="number"
					className="form-control new-post-label"
					placeholder="Установить з/п в $?"
				/>

				<button className="btn btn-outline-light">Добавить</button>
			</form>
		</div>
	);
};

export default EmploeesAddForm;
