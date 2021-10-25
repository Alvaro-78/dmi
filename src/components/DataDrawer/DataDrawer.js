import React from 'react';

const DataDrawer = ({ image, name }) => {
	return (
		<>
			<div className="card animate__animated animate__fadeIn">
				<img className="img" src={image} alt={name}></img>
				<p className="card-name">{name}</p>
			</div>
		</>
	);
};

export default DataDrawer;
