import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
	return (
				<div style={{ overflow: 'scroll' , border: '3px solid orange' , height: '800px'}}>
	
		{props.children}
		</div>

		);
};

export default Scroll;
