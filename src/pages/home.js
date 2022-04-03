import React, {Component} from 'react';



import Header from '../components/header';
import Footer from '../components/footer';
import Ipca from '../components/ipca';


class Home extends Component {
	
	render() {
		
		return (
			<div>
				<Header/>
				<Ipca />
				
				
				<Footer/>
			</div>
		
		)
	}
} export default Home;