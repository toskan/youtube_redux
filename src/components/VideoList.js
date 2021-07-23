import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { fetchResults } from '../actions';

const VideoList = ({ results, order }) => {
	return (
		<div className="ui relaxed divided list">
			{results &&
				results.map((video, i, a) => (
					<VideoItem video={video} key={video.id.videoId} />
				))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		results: state.results.items,
		order: state.order,
	};
};

export default connect(mapStateToProps, { fetchResults })(VideoList);
