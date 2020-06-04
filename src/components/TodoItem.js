import React from 'react';
import ToggleBtn from './ToggleBtn';
import DeleteBtn from './DeleteBtn';
import useEditState from '../hooks/useEditState';
import EditTodoForm from './EditTodoForm';

const TodoItem = ({ content, isDone, id }) => {
	const [
		isEditing,
		toggleEditState
	] = useEditState(false);

	return (
		<li className={`list-item ${isEditing && 'box-shadow-inset'}`}>
			{!isEditing ? (
				<React.Fragment>
					<div className='list-item__left'>
						<ToggleBtn isDone={isDone} id={id} />
						<div
							className={`list-item__content ${isDone && 'done'}`}
							onDoubleClick={toggleEditState}
						>
							{content}
						</div>
					</div>
					<div className='list-item__right'>
						<em
							onDoubleClick={toggleEditState}
							className='list-item__date'
						>
							{new Date().toDateString()}
						</em>
						<DeleteBtn id={id} />
					</div>
				</React.Fragment>
			) : (
				<EditTodoForm
					toggleEditState={toggleEditState}
					id={id}
					content={content}
				/>
			)}
		</li>
	);
};

export default TodoItem;
