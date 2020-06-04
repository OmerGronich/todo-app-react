import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/todos.context';

const ToggleBtn = ({ isDone, id, hiddenClass }) => {
	const dispatch = useContext(DispatchContext);

	const handleClick = () => {
		dispatch({ type: 'TOGGLE', id });
	};

	return (
		<i
			onClick={handleClick}
			className={`far fa-${isDone
				? 'check-circle'
				: 'circle'} btn btn--toggle-one ${hiddenClass}`}
		/>
	);
};

export default ToggleBtn;
