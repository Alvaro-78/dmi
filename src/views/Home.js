import React from 'react';
import { Link } from 'react-router-dom';
import useFetchTvMaze from '../hooks/useFetchTvMaze';

const Home = () => {
	const { data, loading } = useFetchTvMaze();

	return (
		<>
			<div className="header-title">
				<p>
					<h1 className="title">TV MAZE SHOWS</h1>
				</p>
			</div>
			{loading && (
				<p className="animate__animated animate__flash">Loading...</p>
			)}
			<div className="container-fluid pt-4">
				<div className="row row-cols-1 row-cols-md-4 g-4">
					{data.map((showList) => {
						return (
							<Link
								className="card-container"
								to={{
									pathname: 'show-movie',
									aboutProps: {
										image: showList.show.image?.original,
										title: showList.show.name,
										description: showList.show.summary,
										genres: showList.show.genres,
										language: showList.show.language,
									},
								}}
							>
								<div className="card">
									<img
										className="home-movie-img"
										src={showList.show.image?.original}
										alt="img"
									/>
									<div className="card-body">
										<h5 className="card-title">{showList.show.name}</h5>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
