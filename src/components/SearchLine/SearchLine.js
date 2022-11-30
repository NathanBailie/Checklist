

// styles
import './searchLine.scss';

// instruments
import { useState } from 'react';


const SearchLine = ({ onSetSearch }) => {
	const [searchName, setSearchName] = useState('');

	const onChangeSearchName = (e) => {
		let value = e.target.value;
		setSearchName(value);
		onSetSearch(value);
	}

	return (
		<div className='search'>
			<input
				placeholder='What do you want to find?'
				onChange={(e) => onChangeSearchName(e)}
			/>

		</div>
	)
}

export default SearchLine;