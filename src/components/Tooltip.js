import React, { useContext, memo } from 'react';
import { TodosContext } from '../contexts/todos.context';

const Tooltip = () => {
	const todos = useContext(TodosContext);

	return (
		<p className='tooltip'>
			{todos.length > 0 ? 'double click to edit' : ''}
		</p>
	);
};

export default Tooltip;
