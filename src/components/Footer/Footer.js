
// styles
import './footer.scss';

// instruments
import { useState } from 'react';

const Footer = ({ onAddNewNote }) => {
	const [note, setNote] = useState('');
	const [comment, setComment] = useState('');
	const [time, setTime] = useState('');

	return (
		<div className="footer">
			<input
				// className='footer__note'
				placeholder='type your note'
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<input
				// className='footer__comment'
				placeholder='type comment'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<input
				// className='footer__time'
				placeholder='type completion time'
				value={time}
				onChange={(e) => setTime(e.target.value)}
			/>
			<button
				onClick={() => {
					onAddNewNote(note, comment, time);
					setNote('');
					setComment('');
					setTime('')
				}}
			>Add Note</button>
		</div>
	)
}

export default Footer;