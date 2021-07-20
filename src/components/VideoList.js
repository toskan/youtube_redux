import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { fetchResults } from '../actions';

const VideoList = ({ results }) => {
	// useEffect(() => {
	// 	fetchResults();
	// });

	console.log(results);
	return (
		<div className="ui relaxed divided list">
			{results &&
				results.map((video) => (
					<VideoItem video={video} key={video.id.videoId} />
				))}
			hello
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		results: state.results.items,
	};
};

export default connect(mapStateToProps, { fetchResults })(VideoList);
