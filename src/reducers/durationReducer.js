export const durationReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_DURATION':
			return action.payload;
		default:
			return state;
	}
};
