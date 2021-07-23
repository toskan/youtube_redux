import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { fetchResults } from '../actions';

const VideoList = ({ results, order }) => {
	return (
		<div className="ui relaxed divided list">
			{results &&
				order.map((e) => (
					<VideoItem video={results[e]} key={results[e].id.videoId} />
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
