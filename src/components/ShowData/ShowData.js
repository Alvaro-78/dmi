import React from 'react';
import useFetchTvMaze from '../../hooks/useFetchTvMaze';
// import DataDrawer from '../DataDrawer/DataDrawer';

const ShowData = () => {
	const { data, loading } = useFetchTvMaze();
	console.log(data);

	return <></>;
};

export default ShowData;
