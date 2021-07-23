import { combineReducers } from 'redux';
import { durationReducer } from './durationReducer';
import { getIdsReducer } from './getIdsReducer';
import { searchReducer } from './searchReducer';
import { selectedVideoReducer } from './selectedVideoReducer';
import { addDurationReducer } from './addDurationReducer';
import { orderIndexByDurationReducer } from './orderIndexByDurationReducer';
import { queryReducer } from './queryReducer';

export default combineReducers({
	results: searchReducer,
	duration: durationReducer,
	selectedVideo: selectedVideoReducer,
	ids: getIdsReducer,
	playTime: addDurationReducer,
	order: orderIndexByDurationReducer,
	query: queryReducer,
});
