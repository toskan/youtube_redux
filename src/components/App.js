import React from 'react';
import VideoResults from './VideoResults';
import SelectedVideo from './SelectedVideo';

const App = () => {
	return (
		<div className="ui container">
			{/* <SearchBar onFormSubmit={this.onTermSubmit} /> */}
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<SelectedVideo />
					</div>
					<div className="five wide column">
						<VideoResults />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
