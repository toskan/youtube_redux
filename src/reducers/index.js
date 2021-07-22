import { combineReducers } from 'redux';
import { durationReducer } from './durationReducer';
import { getIdsReducer } from './getIdsReducer';
import { queryReducer } from './queryReducer';
import { searchReducer } from './searchReducer';
import { selectedVideoReducer } from './selectedVideoReducer';
import { addDurationReducer } from './addDurationReducer';

export default combineReducers({
	results: searchReducer,
	duration: durationReducer,
	selectedVideo: selectedVideoReducer,
	query: queryReducer,
	ids: getIdsReducer,
	playTime: addDurationReducer,
});
