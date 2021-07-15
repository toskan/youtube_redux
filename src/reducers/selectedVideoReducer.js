export const selectedVideoReducer = (selectedVideo = null, action) => {
	switch (action.type) {
		case 'SELECT_VIDEO':
			return action.payload;
		default:
			return selectedVideo;
	}
};
