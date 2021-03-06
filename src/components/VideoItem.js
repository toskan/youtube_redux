import React from 'react';
import { connect } from 'react-redux';
import './VideoItem.css';
import { clickVideo } from '../actions';

const VideoItem = ({ state, video, clickVideo }) => {
	return (
		<div
			className="item video-item"
			onClick={() => (clickVideo(video), console.log(state))}
		>
			<img
				alt={video.snippet.title}
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		videoSelected: state.videoSelected,
		state: state,
	};
};

export default connect(mapStateToProps, { clickVideo })(VideoItem);
