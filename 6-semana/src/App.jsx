import React, {useState, useEffect} from 'react';
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

export default function App() {

	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)
	const [field, setField] = useState(null)
	const [direction, setDirection] = useState(null)

	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		.then(data => setContacts(data))
	})

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		contacts: results,
	// 		loading: true,
	// 		field: null,
	// 		direction: null
	// 	}
	// }

	// componentDidMount() {
		
	// 	const that = this;

	// 	fetch(url, {method: 'get'})
	// 	.then(function(response) {
	// 		return response.json()
	// 	})
	// 	.then(function(data) {
	// 		results = data;
	// 		that.setState({
	// 			contacts: results,
	// 			loading: false
	// 		});
	// 	})
	// 	.catch(function(err) { 
	// 		console.error('Failed retrieving information', err);
	// 	});
	// }
  
	searchByName = (value) => {
		const filteredResults = SearchByName(results, value);
		const orderedResults = OrderByField(filteredResults, field, direction);
		setState({
			contacts: orderedResults
		});
	}

	orderByField = (event, field, direction) => {
		const orderedResults = OrderByField(contacts, field, direction);
		this.setState({
			contacts: orderedResults,
			field: field,
			direction: direction
		});
	}


		return (
		<React.Fragment>
			
			<Topbar />
			<Filters
				HandleClick={(event, field, direction) => orderByField(event, field, direction)}
				HandleChange={value => searchByName(value)} 
			/>
			<Contacts>

				{loading ? <Loading /> : null}

				{contacts.map(contact => {
					return (
						<Contact key={contact.id} data={contact} />
					);
				})}
				
			</ Contacts>

			<Footer />

		</React.Fragment>
		)
}