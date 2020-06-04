import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { TodosContext } from '../contexts/todos.context';
import { DispatchContext } from '../contexts/todos.context';

const AddTodoForm = () => {
	const [
		value,
		handleChange,
		reset
	] = useInputState('');

	const todos = useContext(TodosContext);
	const dispatch = useContext(DispatchContext);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'ADD', content: value });
		reset();
	};

	return (
		<form className='AddTodoForm' onSubmit={handleSubmit}>
			<label className='add-todo' htmlFor='add-todo'>
				{todos.length > 0 && (
					<i
						id='toggle-all'
						className='fas fa-chevron-circle-down btn btn--toggle-all'
						onClick={() => dispatch({ type: 'TOGGLE_ALL' })}
					/>
				)}
				<input
					onChange={handleChange}
					value={value}
					className='add-todo__input'
					type='text'
					placeholder='Add a task...'
					id='add-todo'
				/>
			</label>
		</form>
	);
};

export default AddTodoForm;
