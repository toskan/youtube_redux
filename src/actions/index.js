import youTube from '../components/apis/youTube';
import _ from 'lodash';

export const fetchResultsR = () => async (dispatch, getState) => {
	await dispatch(fetchResults());
	dispatch(getIds());
	console.log(getState().ids);
	await dispatch(fetchDuration(getState().ids));
	dispatch(addPlayTime());
};

export const fetchResults =
	(search = `ikaria`) =>
	async (dispatch) => {
		const response = await youTube.get(
			`/search?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=50&videoDuration=short&type=video&part=snippet`
		);

		dispatch({ type: 'FETCH_RESULTS', payload: response.data });

		getIds();
	};

export const fetchDuration = (ids) => async (dispatch) => {
	const response = await youTube.get(
		`/videos?key=${process.env.REACT_APP_API_KEY}&id=${ids}&part=contentDetails`
	);

	dispatch({ type: 'FETCH_DURATION', payload: response.data });
};

export const clickVideo = (video) => (dispatch) => {
	// console.log(video);
	dispatch({ type: 'SELECT_VIDEO', payload: video });
};

export const querySubmitted =
	(query = {}) =>
	(dispatch) => {
		console.log(query);
		dispatch({ type: 'QUERY_SUBMIT', payload: query });
	};

export const getIds =
	(ids = []) =>
	(dispatch, getState) => {
		_.chain(getState().results.items)
			.forEach((e) => ids.push(`${e.id.videoId}`))
			.value();
		console.log(ids.join(','));
		dispatch({ type: 'GET_IDS', payload: ids.join(',') });
	};

// .duration.items.map((e) =>
// 					console.log(
// 						!e.contentDetails.duration
// 							.substring(2)
// 							.split('M')[0]
// 							.includes('S') ?
// 					)
// 				)

export const addPlayTime =
	(playTime = []) =>
	(dispatch, getState) => {
		_.chain(getState().duration.items).forEach((e) =>
			playTime.push(
				e.contentDetails.duration.substring(2).replace(/[A-Z]/g, ':')
			)
		);
		dispatch({ type: 'ADD_DURATION', payload: playTime });
		console.log(playTime);
	};

//  [
// 		...playTime,
// 		{
// 			['duration']: e.contentDetails.duration
// 				.substring(2)
// 				.replace(/[A-Z]/g, ':'),
// 		},
// 	]);
