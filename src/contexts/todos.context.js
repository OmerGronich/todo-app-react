import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../reducers/useLocalStorage.reducer';
export const TodosContext = createContext();
export const DispatchContext = createContext();

const TodosProvider = ({ children }) => {
	const [
		todos,
		dispatch
	] = useLocalStorageReducer('todos', [], todoReducer);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
};

export default TodosProvider;
