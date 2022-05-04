import React from 'react';
import './Card.css';


class Card extends React.Component {
	render(){
		return (
			<div className='neen2 dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img src={`https://robohash.org/${this.props.id}?set=set4`} alt='cat'/>
				<div>
				 <h2>{this.props.name}</h2>
				 <p>{this.props.email}</p>
			    </div>
			</div>



			);
	}
}


export default Card;