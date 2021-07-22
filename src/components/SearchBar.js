import React from 'react';
import { connect } from 'react-redux';
import { querySubmitted, fetchResults, getIds } from '../actions';

const SearchBar = ({ query, querySubmitted, fetchResults, getIds }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		fetchResults(query.search);
	};

	const onInputChange = (e) => {
		querySubmitted({
			...query,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="search-bar ui segment">
			<form action="" className="ui form" onSubmit={onSubmit}>
				<div className="field">
					<label htmlFor="">Video Search</label>
					<input
						type="text"
						id="search"
						name="search"
						placeholder="search"
						value={query.search}
						onChange={onInputChange}
					/>
				</div>
				<div className="field">
					<label htmlFor="">Min Duration</label>
					<input
						type="number"
						id="search"
						name="minDur"
						placeholder="enter minutes"
						value={query.minDur}
						onChange={onInputChange}
					/>
				</div>
				<div className="field">
					<label htmlFor="">Max Duration</label>
					<input
						type="number"
						name="maxDur"
						placeholder="enter minutes"
						value={query.maxDur}
						onChange={onInputChange}
					/>
				</div>
				<input type="submit" value="search" id="submit" />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		query: state.query,
		results: state.results,
	};
};

export default connect(mapStateToProps, {
	querySubmitted,
	fetchResults,
	getIds,
})(SearchBar);
