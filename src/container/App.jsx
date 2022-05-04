import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import ErrorBoundry from'../component/ErrorBoundry';

class App extends React.Component {
    constructor(){
    	super();
    	this.state = {
    		cats: [],
    		searchfield: ''
    	}
    }
    componentDidMount() {
    	fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => {return response.json()})
          .then(cat => this.setState({ cats: cat}))
    }

    onSearchChange = (event) => {
    	this.setState({ searchfield : event.target.value })
    	
    }


	render() {
		   	const filterCat = this.state.cats.filter(cat =>{
    		return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	})
		   	if (this.state.cats.length === 0){
		   		return <h1 className='tc'>Loading</h1>
		   	} else {

		return (
			<div className='tc'>
			<h1>Cat Friends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<ErrorBoundry>
			<CardList cats={filterCat}/>
			</ErrorBoundry>
			</Scroll>
			</div>

			)
	}
	}
}
export default App;