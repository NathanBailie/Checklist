import './footer.scss';
import { useState } from 'react';


const Footer = ({ onAddNewNote }) => {
	const [note, setNote] = useState('');
	const [comment, setComment] = useState('');
	const [time, setTime] = useState('');

	return (
		<div className="footer">
			<input
				placeholder='type your note'
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<input
				placeholder='type comment'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<input
				placeholder='type completion time'
				value={time}
				onChange={(e) => setTime(e.target.value)}
			/>
			<button
				onClick={() => {
					setNote('');
					setComment('');
					setTime('')
					onAddNewNote(note, comment, time);
				}}
			>Add note</button>
		</div>
	);
};

export default Footer;