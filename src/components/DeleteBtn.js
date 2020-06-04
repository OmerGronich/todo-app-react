import React, { useContext, memo } from 'react';
import { DispatchContext } from '../contexts/todos.context';

const DeleteBtn = ({ id }) => {
	const dispatch = useContext(DispatchContext);

	const handleClick = () => {
		dispatch({ type: 'DELETE', id });
	};

	return <i onClick={handleClick} className='fas fa-times btn btn--remove' />;
};

export default memo(DeleteBtn);
