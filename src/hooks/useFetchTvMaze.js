import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchTvMaze = () => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		axios(`https://api.tvmaze.com/search/shows?q=girls`).then((resp) => {
			setTimeout(() => {
				console.log(resp.data);
				console.log(resp.data);
				setState({
					data: resp.data,
					loading: false,
				});
			}, 2000);
		});
	}, []);

	return state;
};

export default useFetchTvMaze;
