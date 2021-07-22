export const getIdsReducer = (ids = '', action) => {
	switch (action.type) {
		case 'GET_IDS':
			return action.payload;
		default:
			return ids;
	}
};
