import React from 'react';

import Button from './Button';

import './Filters.scss';

class Filters extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			selection: null,
			pastSelection: null,
			direction: 'down'
		}
	}

	reverseDirection() {
        const newDirection = this.state.direction === 'down' ? 'up' : 'down'
        return newDirection
    }

	selectField(event, field) {
		event.preventDefault();
		const newDirection = (this.state.selection === field) ? this.reverseDirection() : 'down'
		this.setState({
			selection: field,
			pastSelection: this.state.selection,
			direction: newDirection
		});
		this.props.HandleClick(event, field, newDirection);
	}
	
	render() {
		return (

			<div className="container" data-testid="filters">
				<section className="filters">

					<div className="filters__search" onChange={event => this.props.HandleChange(event.target.value)}>
						<input type="text" className="filters__search__input" placeholder="Pesquisar" />
						<button className="filters__search__icon">
						<i className="fa fa-search"/>
						</button>
					</div>
		
					<Button 
						name='Nome'
						value='name'
						state={this.state}
						HandleClick={(event, field) => this.selectField(event, field)}
					/>
					<Button
						name='País'
						value='country'
						state={this.state}
						HandleClick={(event, field) => this.selectField(event, field)}
					/>
					<Button
						name='Empresa'
						value='company'
						state={this.state}
						HandleClick={(event, field) => this.selectField(event, field)}
					/>
					<Button
						name='Departamento'
						value='department'
						state={this.state}
						HandleClick={(event, field) => this.selectField(event, field)}
					/>
					<Button
						name='Data de admissão'
						value='admissionDate'
						state={this.state}
						HandleClick={(event, field) => this.selectField(event, field)}
					/>
	
				</section>
			</div>

		);
	}
}

export default Filters;
