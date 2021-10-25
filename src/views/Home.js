import React from 'react';
import useFetchTvMaze from '../hooks/useFetchTvMaze';

const Home = () => {
	// const [categories, setCategories] = useState(['random']);

	const { data, loading } = useFetchTvMaze();

	return (
		<>
			<div className="header-title">
				<div>
					<h1 className="title">TV MAZE SHOWS</h1>
				</div>
			</div>
			{loading && (
				<p className="animate__animated animate__flash">Loading...</p>
			)}
			<div className="container-fluid">
				<div className="card-grid">
					{data.map((showList) => {
						return (
							<div className="card" key={showList.id}>
								{showList.show.name}
								{showList.show.summary}
								{/* {showList.show.image} */}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
