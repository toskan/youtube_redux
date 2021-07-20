export const getIdsReducer = (ids = '') => {
	return {
		type: 'GET_IDS',
		payload: ids,
	};
};
