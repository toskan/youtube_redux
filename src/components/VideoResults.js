import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../actions';
import VideoList from './VideoList';

class VideoResults extends React.Component {
	componentDidMount() {
		this.props.fetchResults();
	}

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

export default connect(mapStateToProps, { fetchResults })(VideoResults);
