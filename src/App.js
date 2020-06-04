import React, { Fragment } from 'react';
import './sass/main.scss';
import TodoApp from './components/TodoApp';

function App() {
	return (
		<Fragment>
			<h1 className='heading-primary'>todo list</h1>
			<TodoApp />
		</Fragment>
	);
}

export default App;
