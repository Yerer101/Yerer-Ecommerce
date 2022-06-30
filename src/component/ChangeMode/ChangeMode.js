import React from 'react';
import {Link} from 'react-router-dom';

const ChangeMode = (props) => {
	return(
		<div>
			<Link to='/'>
				<button className="w3-wide w3-button w3-padding-16 w3-hover-black" title="Change-to-other-pages">
					{props.name}
				</button>
			</Link>
		</div>
	);
}

export default ChangeMode;