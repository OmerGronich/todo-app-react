import React, { useContext } from 'react';
import ToggleBtn from './ToggleBtn';
import useInputState from '../hooks/useInputState';
import { DispatchContext } from '../contexts/todos.context';

const EditTodoForm = ({ id, content, toggleEditState }) => {
	const [
		value,
		handleChange,
		reset
	] = useInputState(content);

	const dispatch = useContext(DispatchContext);

	const handleSubmit = e => {
		e.preventDefault();
		if (value) {
			dispatch({ type: 'EDIT', id, newTodoContent: value });
			reset();
			toggleEditState();
		}
	};

	const handleBlur = e => {
		if (value) {
			dispatch({ type: 'EDIT', id, newTodoContent: value });
			reset();
			toggleEditState();
		} else {
			reset();
			toggleEditState();
		}
	};

	return (
		<form className='list-item__left' onSubmit={handleSubmit}>
			<ToggleBtn hiddenClass={'hidden'} />
			<input
				onChange={handleChange}
				className='list-item__input'
				type='text'
				value={value}
				onBlur={handleBlur}
				autoFocus
			/>
		</form>
	);
};

export default EditTodoForm;
