import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, initialVal, reducer) => {
	const [
		state,
		dispatch
	] = useReducer(reducer, initialVal, () => {
		let value;
		try {
			value = JSON.parse(localStorage[key]) || initialVal;
		} catch (error) {
			value = initialVal;
		}
		return value;
	});

	useEffect(
		() => {
			localStorage.setItem(key, JSON.stringify(state));
		},
		[
			state,
			key
		]
	);

	return [
		state,
		dispatch
	];
};

export default useLocalStorageReducer;
