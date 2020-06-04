import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../contexts/todos.context';

const TodoList = () => {
	const todos = useContext(TodosContext);

	return (
		<ul className='list'>
			{todos.map(todo => <TodoItem {...todo} key={todo.id} />)}
		</ul>
	);
};

export default TodoList;
