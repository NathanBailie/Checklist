// styles
import './listItem.scss';

// resources
import important from './icons/important.png';
import done from './icons/done.png';
import remove from './icons/remove.png';

// instruments
import { useState } from 'react';


const ListItem = ({ finalData, onTogglePoperty, onRemoveItem, onEditItem, onChangeNote }) => {
	const [noteValue, setNoteValue] = useState('');


	const res = finalData.map((item, index) => {
		const { id, note, comment, time, vital, completed, editNote, editComment, editTime, value } = item;


		let noteClasses = 'item__note';
		let commentClasses = 'item__comment';
		let timeClasses = 'item__time';

		if (vital) {
			noteClasses = 'item__note item__note_active';
		}
		if (completed) {
			noteClasses = 'item__note item__note_completed';
			commentClasses = 'item__comment item__comment_completed';
			timeClasses = 'item__time item__time_completed'
		}



		const onChangeResult = (testedValue, spanClasses, inputClasses, id, editPermissionName, editValueName, value) => {
			if (!testedValue) {
				return (
					<span
						className={spanClasses}
						onClick={() => onEditItem(id, editPermissionName)}
					>{value}</span>
				)
			} else {
				return (
					<input
						value={value}
						className={inputClasses}
						onChange={(e) => onChangeNote(id, editValueName, e.target.value)}
						onBlur={() => onEditItem(id, editPermissionName)} />
				)
			}
		}

		const noteResult = onChangeResult(
			editNote,
			noteClasses,
			'item__input item__input_note',
			id,
			'editNote',
			'note',
			note);

		const commentResult = onChangeResult(
			editComment,
			commentClasses,
			'item__input item__input_comment',
			id,
			'editComment',
			'comment',
			comment);

		const timeResult = onChangeResult(
			editTime,
			timeClasses,
			'item__input item__input_time',
			id,
			'editTime',
			'time',
			time);

		return (
			<div key={id} className="item">
				<span className='item__number'>{index + 1}</span>

				{noteResult}
				{commentResult}
				{timeResult}

				<span
					className="item__important"
					onClick={() => onTogglePoperty(id, 'vital')}
				>
					<img src={important} alt="important" />
				</span>

				<span
					className="item__done"
					onClick={() => onTogglePoperty(id, 'completed')}>
					<img src={done} alt="done" />
				</span>

				<span
					className="item__remove"
					onClick={() => onRemoveItem(id)}>
					<img src={remove} alt="remove" />
				</span>
			</div>
		)
	})

	return (
		<>
			{res}
		</>
	)
}

export default ListItem;