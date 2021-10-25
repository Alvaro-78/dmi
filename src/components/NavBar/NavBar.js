import React from 'react';

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid ">
					<div className="navbar-brand ">TV MAZE</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
