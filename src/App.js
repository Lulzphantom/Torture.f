import React from 'react';
import {
	Navbar,
	NavbarBrand,
} from 'reactstrap';

import { TortureContainer } from './containers/tortureContainer';

const App = () => {
	return (
		<React.Fragment>
			<Navbar expand="md">
				<NavbarBrand>Torture.f <span role='img' aria-label='emoji'>🤍</span></NavbarBrand>
			</Navbar>
			<TortureContainer />
			<div className="footer">
				<p>With <span role='img' aria-label='emoji'>♥</span> by <a href='https://github.com/Lulzphantom' target="_blank" without rel="noopener noreferrer">Lulzphantom</a></p>
			</div>
		</React.Fragment>
	);
}

export default App;
