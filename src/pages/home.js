import React, {Component} from 'react';



import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import Ipca from '../components/ipca';


class Home extends Component {
	
	render() {
		
		return (
			<div>
				<Nav/>
				<Header/>

				<Ipca />
				
				
				<Footer/>
				<div class="copyright py-4 text-center text-white">
                    <div class="container"><small>Copyright &copy; Fábio Krone 2022</small></div>
                </div>
			</div>
		
		)
	}
} export default Home;