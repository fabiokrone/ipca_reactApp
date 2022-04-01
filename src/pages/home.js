import React, {Component} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

class Home extends Component {
	
	render() {
		
		return (
			<div>
				<Header/>
				// Here is the location for us to insert html files or code to render the rest of the page
				<Footer/>
			</div>
		
		)
	}
} export default Home;