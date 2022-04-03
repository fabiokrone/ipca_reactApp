import React, { Component } from 'react';
import api from './api';

class Ipca extends Component{
	
	state = {
		ipca: [],
	}
	async componentDidMount(){
		const response = await api.get('');
		
		//console.log(response.data);
		
		this.setState({ipca: response.data});
	}
	render(){
		
		const {ipca} = this.state;
		const ipca12 = ipca.splice(-12,12)
				
		return (
			
		
		<div class="container">
			
				<h2>IPCA últimos 12 meses</h2>
				{console.log(ipca12)}
				{ipca12.map(ipca12 => (
				
			

				<ul style={{listStyleType: "none"}}>
					<li key={ipca12.data}>
					<p class="lead">
						Data:&nbsp;{ipca12.data};
						Valor:&nbsp;{ipca12.valor}
					</p>				
					</li>
				</ul>
						
				))}
				
		
			
		</div>
		)
		
	};
	
};
export default Ipca;