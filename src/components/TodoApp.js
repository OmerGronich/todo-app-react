import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import Tooltip from './Tooltip';
import TodosProvider from '../contexts/todos.context';

const TodoApp = () => {
	return (
		<TodosProvider>
			<div className='container'>
				<AddTodoForm />
				<TodoList />
			</div>
			<Tooltip />
		</TodosProvider>
	);
};

export default TodoApp;
