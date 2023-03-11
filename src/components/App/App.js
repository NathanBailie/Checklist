import './app.scss'
import Header from '../Header';
import SearchLine from '../SearchLine';
import Filters from '../Filters';
import List from '../List';
import Footer from '../Footer';
import { useState } from 'react';
import uuid from 'react-uuid';


const App = () => {
	const notes = [
		onCreateNewItem('first note', 'first comment', '-/-'),
		onCreateNewItem('second note', 'second comment', '-/-'),
		onCreateNewItem('third note', 'third comment', '-/-')
	];
	const [data, setData] = useState(notes);
	const [filterName, setFilterName] = useState('All');
	const [search, setSearch] = useState('');
	const filteredData = onSetFilteredData(filterName);
	const finalData = onGetFinalFilteredData(filteredData, search);
	const all = data.length;
	const active = data.filter(note => note.vital).length;
	const finished = data.filter(note => note.completed).length;

	function onCreateNewItem(note, comment, time) {
		return {
			id: uuid(),
			note: note,
			comment: comment,
			time: time,
			vital: false,
			completed: false,
			editNote: false,
			editComment: false,
			editTime: false
		};
	};

	const onTogglePoperty = (id, property) => {
		let secondProperty;
		if (property === 'completed') {
			secondProperty = 'vital';
		} else if (property === 'vital') {
			secondProperty = 'completed';
		};

		const newArr = data.map(item => {
			if (item.id === id) {
				return {
					...item,
					[property]: !item[property],
					[secondProperty]: false
				};
			};
			return item;
		});
		setData(newArr);
	};

	const onAddNewNote = (note, comment, time) => {
		console.log(time)
		if (note.length === 0) {
			return;
		};
		let сommentary = comment === '' ? '-/-' : comment;
		let localTime = time === '' ? '-/-' : time;
		const newNote = onCreateNewItem(note, сommentary, localTime);
		setData([...data, newNote]);
	};

	const onRemoveItem = (id) => {
		const newArr = data.filter(item => item.id !== id);
		setData(newArr);
	};

	const onSetFilterName = (filterName) => {
		setFilterName(filterName);
	};

	const onSetSearch = (searchWord) => {
		setSearch(searchWord);
	};

	function onSetFilteredData(searchName) {
		switch (searchName) {
			case 'All':
				return data;
			case 'Active':
				return data.filter(item => item.vital);
			case 'Completed':
				return data.filter(item => item.completed);

			default:
				return data;
		};
	};

	function onGetFinalFilteredData(data, searhWord) {
		return data.filter(item => {
			if (
				finder(item.note, searhWord)
				||
				finder(item.comment, searhWord)
				||
				finder(item.time, searhWord)) { return item };
		});

		function finder(objectToFindIn, searhWord) {
			return objectToFindIn.toLowerCase().indexOf(searhWord.toLowerCase()) > -1;
		};
	};

	const onEditItem = (id, property) => {
		const newArr = data.map(note => {
			if (note.id === id) {
				return { ...note, [property]: !note[property] }
			};
			return note;
		});
		setData(newArr);
	};

	const onChangeNote = (id, property, value) => {
		const newArr = data.map(note => {
			if (note.id === id) {
				return { ...note, [property]: value };
			};
			return note;
		});
		setData(newArr);
	};

	return (
		<div className="container">
			<Header
				all={all}
				active={active}
				finished={finished} />
			<div className="filterWraper">
				<SearchLine
					onSetSearch={onSetSearch} />
				<Filters
					onSetFilterName={onSetFilterName} />
			</div>
			<List
				finalData={finalData}
				onTogglePoperty={onTogglePoperty}
				onRemoveItem={onRemoveItem}
				onEditItem={onEditItem}
				onChangeNote={onChangeNote}
			/>
			<Footer
				onAddNewNote={onAddNewNote} />
		</div >
	);
};

export default App;