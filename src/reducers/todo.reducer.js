import { v4 as uuid } from 'uuid';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{ id: uuid(), content: action.content, isDone: false }
			];
		case 'DELETE':
			return state.filter(todo => todo.id !== action.id);
		case 'TOGGLE':
			return state.map(
				todo =>
					todo.id === action.id
						? { ...todo, isDone: !todo.isDone }
						: todo
			);
		case 'EDIT':
			return state.map(
				todo =>
					todo.id === action.id
						? { ...todo, content: action.newTodoContent }
						: todo
			);
		case 'TOGGLE_ALL':
			const areAllCompleted = state.every(todo => todo.isDone);
			return state.map(todo => ({
				...todo,
				isDone : !areAllCompleted
			}));
		default:
			return state;
	}
};

export default reducer;
