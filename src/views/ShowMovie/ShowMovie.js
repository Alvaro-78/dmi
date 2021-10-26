import React from 'react';

const ShowMovie = (props) => {
	console.log(props.location.aboutProps);
	return (
		<>
			<div className="movie-container">
				<div className="show-movie-info">
					<img
						className="movie-img"
						src={props.location.aboutProps.image}
						alt="img"
					/>
					<p className="card-body">Title: {props.location.aboutProps.title}</p>
					<p> Genre: {props.location.aboutProps.genres.join(', ')}</p>
					<p> Language: {props.location.aboutProps.language}</p>
					<p className="description-style">
						Description: {props.location.aboutProps.description}
					</p>
				</div>
			</div>
		</>
	);
};

export default ShowMovie;
