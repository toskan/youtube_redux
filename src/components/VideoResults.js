import React from 'react';
import { connect } from 'react-redux';
import { fetchResultsR } from '../actions';
import VideoList from './VideoList';

class VideoResults extends React.Component {
	componentDidMount() {
		this.props.fetchResultsR();
		console.log(this.props);
	}

	// componentDidUpdate() {
	// 	// let videoIds = [];
	// 	// this.props.results.forEach((e) => videoIds.push(`${e.id.videoId}`));
	// 	// videoIds = videoIds.join(',');
	// 	// console.log(videoIds);
	// 	this.props.getIds();
	// }

	render() {
		return (
			<div>
				<VideoList />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { results: state.results.items };
};

export default connect(mapStateToProps, { fetchResultsR })(VideoResults);
// export default VideoResults;
