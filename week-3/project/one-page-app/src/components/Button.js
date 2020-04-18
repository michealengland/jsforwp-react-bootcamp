import React from 'react';

class Button extends React.Component {
	constructor( props ) {
		super( props );
		this.state={
			foregroundColor: '#333',
			backgroundColor: '#fff',
		}
	}

	// Toggle light or dark color modes.
	onClick = e => (
		this.setState( {
			foregroundColor: ( this.state.foregroundColor === '#fff' ? '#333' : '#fff' ),
			backgroundColor: ( this.state.backgroundColor === '#fff' ? '#333' : '#fff' ),
		} )
	);

	render() {
		const {
			label,
		} = this.props;

		// Setup Styles.
		const buttonBackground = {
			color: this.state.foregroundColor,
			backgroundColor: this.state.backgroundColor,
		};

		return (
			<button
				onClick={ this.onClick }
				style={ buttonBackground }
			>
				{ label }
			</button>
		);
	}
}

export default Button;

