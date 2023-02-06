import './filters.scss';
import { useState } from 'react';
import uuid from 'react-uuid';


const Filters = ({ onSetFilterName }) => {
	const buttons = [
		{ id: uuid(), value: 'All', active: true },
		{ id: uuid(), value: 'Active', active: false },
		{ id: uuid(), value: 'Completed', active: false }
	];
	const [data, setData] = useState(buttons);

	const onToggleProperty = (id) => {
		const newArr = data.map(button => {
			if (button.id === id) {
				return { ...button, active: true };
			} else {
				return { ...button, active: false };
			};
		});
		setData(newArr);
	};

	const res = data.map((button, index) => {
		let buttonClasses = '';
		if (button.active === true) {
			buttonClasses = 'active'
		};

		return <button
			key={index}
			className={buttonClasses}
			onClick={() => {
				onToggleProperty(button.id);
				onSetFilterName(button.value)
			}}
		>{button.value}</button>
	});

	return (
		<div className="buttons">
			{res}
		</div>
	);
};

export default Filters;
