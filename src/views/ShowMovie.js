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
					<div className="card-body">
						<h5 className="card-title">
							Title: {props.location.aboutProps.title}
						</h5>
					</div>
					<p> Genre: {props.location.aboutProps.genres.join(',')}</p>
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
