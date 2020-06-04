import { useState } from 'react';

const useEditState = (initialVal = false) => {
	const [
		state,
		setState
	] = useState(initialVal);

	const toggleEditState = () => {
		setState(!state);
	};

	return [
		state,
		toggleEditState
	];
};

export default useEditState;
