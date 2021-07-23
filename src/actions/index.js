import youTube from '../components/apis/youTube';
import _ from 'lodash';

export const fetchResults = () => async (dispatch, getState) => {
	await dispatch(fetchInfo(getState().query.search));
	dispatch(getIds());
	await dispatch(fetchDuration(getState().ids));
	dispatch(addPlayTime());
	dispatch(indexOrder());
};

export const fetchInfo = (search) => async (dispatch) => {
	const response = await youTube.get(
		`/search?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=50&videoDuration=short&type=video&part=snippet`
	);

	dispatch({ type: 'FETCH_RESULTS', payload: response.data });
};

export const fetchDuration = (ids) => async (dispatch) => {
	const response = await youTube.get(
		`/videos?key=${process.env.REACT_APP_API_KEY}&id=${ids}&part=contentDetails`
	);

	dispatch({ type: 'FETCH_DURATION', payload: response.data });
};

export const clickVideo = (video) => (dispatch) => {
	dispatch({ type: 'SELECT_VIDEO', payload: video });
};

export const getIds =
	(ids = []) =>
	(dispatch, getState) => {
		_.chain(getState().results.items)
			.forEach((e) => ids.push(`${e.id.videoId}`))
			.value();
		dispatch({ type: 'GET_IDS', payload: ids.join(',') });
	};

export const addPlayTime =
	(playTime = [], time = '', timeObj = {}, ave = 0) =>
	(dispatch, getState) => {
		getState().duration.items.forEach((e, i) => {
			time = e.contentDetails.duration.substring(2);
			if (!time.includes('H')) {
				time = `00H${time}`;
			}
			if (!time.includes('M')) {
				if (time.includes('S')) {
					time = `${time.slice(
						0,
						time.indexOf('H') + 1
					)}00M${time.slice(time.indexOf('H') + 1, time.length)}`;
				} else {
					time = time = `${time.slice(0, time.indexOf('H') + 1)}00M$`;
				}
			}
			if (!time.includes('S')) {
				time = `${time.slice(0, time.indexOf('M') + 1)}00S`;
			}
			time = time
				.split(/[A-Z]/g)
				.map((e, i) =>
					!i
						? Number(e) * 3600
						: i === 1
						? Number(e) * 60
						: i === 2
						? Number(e)
						: 0
				)
				.reduce((a, e) => a + e);
			timeObj = {
				seconds: time,
				id: e.id,
			};
			playTime.push(timeObj);
		});

		ave =
			((Number(getState().query.maxDur) +
				Number(getState().query.minDur)) /
				2) *
			60;
		playTime.sort(
			(a, b) => Math.abs(ave - a.seconds) - Math.abs(ave - b.seconds)
		);

		dispatch({ type: 'ADD_DURATION', payload: playTime });
	};

export const indexOrder =
	(order = []) =>
	(dispatch, getState) => {
		getState().playTime.forEach((e, i) =>
			order.push(
				getState().results.items.findIndex((x) => x.id.videoId === e.id)
			)
		);
		dispatch({ type: 'INDEX_ORDER', payload: order });
	};

export const querySubmitted =
	(query = {}) =>
	(dispatch) => {
		dispatch({ type: 'QUERY_SUBMIT', payload: query });
	};

//duration: short (<4min) medium (4-20 including) long (>20min)
//use relatedToVideo?
