import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Loading from './components/Loading';
import Contact from './components/Contact';
import Footer from './components/Footer';


import {SearchByName, OrderByField } from './utils'

import './App.scss';

const url = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
var results = [];

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contacts: results,
			loading: true,
			field: null,
			direction: null
		}
	}

	componentDidMount() {
		
		const that = this;

		fetch(url, {method: 'get'})
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {
			results = data;
			that.setState({
				contacts: results,
				loading: false
			});
		})
		.catch(function(err) { 
			console.error('Failed retrieving information', err);
		});
	}
  
	searchByName(value) {
		const filteredResults = SearchByName(results, value);
		const orderedResults = OrderByField(filteredResults, this.state.field, this.state.direction);
		this.setState({
			contacts: orderedResults
		});
	}

	orderByField(event, field, direction) {
		const orderedResults = OrderByField(this.state.contacts, field, direction);
		this.setState({
			contacts: orderedResults,
			field: field,
			direction: direction
		});
	}

	render() {
		return (
		<React.Fragment>
			
			<Topbar />
			<Filters
				HandleClick={(event, field, direction) => this.orderByField(event, field, direction)}
				HandleChange={value => this.searchByName(value)} 
			/>
			<Contacts state={this.state}>

				{this.state.loading ? <Loading /> : null}

				{this.state.contacts.map(contact => {
					return (
						<Contact key={contact.id} data={contact} />
					);
				})}
				
			</ Contacts>

			<Footer />

		</React.Fragment>
		)
	}

}

export default App;
