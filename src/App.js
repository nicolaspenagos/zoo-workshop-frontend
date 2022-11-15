import SnakeAPI from './SnakeAPI.js';

import { Component } from 'react';
import { Button } from 'primereact/button';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			showInfoComponent: true
		}

	}

	render(){

		let html;
		if(this.state.showInfoComponent){
			html = (
				<main className="welcome__container">
					<div className="">
						<img src="/python.png" className="python"/>
						<img src="/plant.png" className="plant"/>
						<aside className="welcome__info">
							<h1 className="welcome__title">Welcome to the Snake API</h1>
							<p>Here you can find to all basic functionalities of the SnakeRestAPI such as: post a new animal un the databases, get an specific animal throw its name and list all the registered animals</p>
							<Button onClick={()=>{this.setState({showInfoComponent:false});}}>Start</Button>
						</aside>
					</div>
				</main>
			)
		}else{

			html = (
				<main>
					<SnakeAPI>
					</SnakeAPI>
				</main>
			)

		}

		return html;
			
				
			
		
	}



}