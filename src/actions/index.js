import youTube from '../components/apis/youTube';
import _ from 'lodash';

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
		console.log(getState());
		dispatch({ type: 'GET_IDS', payload: ids.join(',') });
	};
