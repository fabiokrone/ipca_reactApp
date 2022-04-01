import React, {Component} from 'react';
import api from './api';


class App extends Component{
	
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
		
		<div>
			<h2>IPCA últimos 12 meses</h2>
			{console.log(ipca12)}
			{ipca12.map(ipca12 => (
			
			<ul style={{listStyleType: "none"}}>
				<li key={ipca12.data}>
					<h4>
						Data:&nbsp;{ipca12.data}&nbsp;&nbsp;
						Valor:&nbsp;{ipca12.valor}
					</h4>				
				</li>
			</ul>	
			))}
			
		
			
		</div>
		)
		
	};
	
};

export default App;
