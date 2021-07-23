export const orderIndexByDurationReducer = (order = [], action) => {
	switch (action.type) {
		case 'INDEX_ORDER':
			return action.payload;
		default:
			return order;
	}
};
