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
		
		
		return(
		<div>
			<h1>Listar IPCA</h1>
			{console.log(ipca)}
			{ipca.map(ipca => (
			
			<li key={ipca.data}>
				<h2>
					<strong> Valor ipca: </strong>
					{ipca.data.show}
				</h2>
			
			</li>
			))}
		
			
		</div>
		)
		
	};
	
};

export default App;
