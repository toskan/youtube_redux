export const addDurationReducer = (playTime = [], action) => {
	switch (action.type) {
		case 'ADD_DURATION':
			return action.payload;
		default:
			return playTime;
	}
};
