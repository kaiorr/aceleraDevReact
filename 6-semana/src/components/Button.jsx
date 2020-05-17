import React from 'react';

import './Button.scss'

class Button extends React.Component {
    
    setClassname() {
        if (this.props.state.selection === this.props.value) {
            return this.props.state.direction === 'down' ? 'fas fa-sort-down' : 'fas fa-sort-up'
        } else {
            return 'fas fa-sort-down'
        }
    }

    render() {
		return (
            <button 
                className={this.props.state.selection === this.props.value ? 'filters__item is-selected' : 'filters__item'}
                onClick={(event, field) => this.props.HandleClick(event, this.props.value)}
            >
					{this.props.name}
                    <i 
                        className={this.setClassname()}
                    />
            </button>
		);
    }
    
}



export default Button;