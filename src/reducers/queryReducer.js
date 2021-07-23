export const queryReducer = (
	query = { search: '', minDur: '', maxDur: '' },
	action
) => {
	switch (action.type) {
		case 'QUERY_SUBMIT':
			return action.payload;
		default:
			return query;
	}
};
