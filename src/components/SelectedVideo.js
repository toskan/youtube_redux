import React from 'react';
import { connect } from 'react-redux';

const SelectedVideo = ({ videoSelected }) => {
	if (!videoSelected) {
		return <div>Loading ... </div>;
	}
	return (
		<div>
			<div className="ui embed">
				<iframe
					title="video-player"
					src={`https://www.youtube.com/embed/${videoSelected.id.videoId}`}
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{videoSelected.snippet.title}</h4>
				<p>{videoSelected.snippet.description}</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		videoSelected: state.selectedVideo,
	};
};

export default connect(mapStateToProps)(SelectedVideo);
