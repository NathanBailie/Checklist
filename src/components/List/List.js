import './list.scss';
import ListItem from '../ListItem';


const List = ({ finalData, onTogglePoperty, onRemoveItem, onEditItem, onChangeNote }) => {
	return (
		<div className='list'>
			<div className="list__wraper">
				<span className='list__number'>#</span>
				<span className="list__note">Note</span>
				<span className="list__comment">Comment</span>
				<span className="list__time">Time</span>
				<span className="list__actions">Actions</span>
			</div>
			<ListItem
				finalData={finalData}
				onTogglePoperty={onTogglePoperty}
				onRemoveItem={onRemoveItem}
				onEditItem={onEditItem}
				onChangeNote={onChangeNote} />
		</div>
	);
};

export default List;