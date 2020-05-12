import React from "react";

class Contacts extends React.Component {

	render() {

		return (

				<div className="container" data-testid="contacts">
					<section className="contacts">
						<article className="contacts">
							<span className="contact__avatar" />
							<span className="contact__data">Nome</span>
							<span className="contact__data">Telefone</span>
							<span className="contact__data">País</span>
							<span className="contact__data">Admissão</span>
							<span className="contact__data">Empresa</span>
							<span className="contact__data">Departamentos</span>
						</article>
						{this.props.children}
					</section>
				</div>

		);

	}
}

export default Contacts;
