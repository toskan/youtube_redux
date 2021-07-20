import { combineReducers } from 'redux';
import { durationReducer } from './durationReducer';
import { getIdsReducer } from './getIdsReducer';
import { queryReducer } from './queryReducer';
import { searchReducer } from './searchReducer';
import { selectedVideoReducer } from './selectedVideoReducer';

export default combineReducers({
	results: searchReducer,
	duration: durationReducer,
	selectedVideo: selectedVideoReducer,
	query: queryReducer,
	Ids: getIdsReducer,
});
