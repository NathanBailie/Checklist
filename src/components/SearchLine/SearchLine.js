import './searchLine.scss';


const SearchLine = ({ onSetSearch }) => {
	const onChangeSearchName = (e) => {
		let value = e.target.value;
		onSetSearch(value);
	};

	return (
		<div className='search'>
			<input
				placeholder='What do you want to find?'
				onChange={(e) => onChangeSearchName(e)}
			/>
		</div>
	);
};

export default SearchLine;