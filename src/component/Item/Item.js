import React from 'react';
import './Item.css';

const Item = (props) => {

	return (
		<div>
			<ul>
				<li>
					{props.name}
				</li>
			</ul>

		</div>
	);
}

export default Item;
