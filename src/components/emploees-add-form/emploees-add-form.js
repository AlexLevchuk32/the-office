import { Component } from 'react';

// import './emploees-add-form.css';
import './emploees-add-form.scss';

class EmploeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: 0,
		};
	}

	onValueChange = (event) => {
		this.setState({
			// Записваем составное свойство в объект
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		if (this.state.name.length < 3 || !this.state.salary) {
			alert('Заполните имя и зарплату сотрудника');
			return;
		}
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: '',
		});
	};

	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавить нового сотрудника</h3>
				<form onSubmit={this.onSubmit} className="add-form d-flex">
					<input
						onChange={this.onValueChange}
						name="name"
						value={name}
						type="text"
						className="form-control new-post-label"
						placeholder="Имя сотрудника"
					/>
					<input
						onChange={this.onValueChange}
						name="salary"
						type="number"
						value={salary}
						className="form-control new-post-label"
						placeholder="Установить з/п в $?"
					/>

					<button className="btn btn-outline-light" type="submit">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmploeesAddForm;
