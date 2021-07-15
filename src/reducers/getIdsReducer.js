export default (ids = '') => {
	return {
		type: 'GET_IDS',
		payload: ids,
	};
};
