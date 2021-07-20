export const queryReducer = (
	query = { search: '', minDur: 3, maxDur: 8 },
	action
) => {
	switch (action.type) {
		case 'QUERY_SUBMIT':
			return action.payload;
		default:
			return query;
	}
};
