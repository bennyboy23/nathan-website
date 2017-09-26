import React, { Component } from 'react';
class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="row">
				<div className="card large opacity blue-text text-lighten-2 z-depth-2">
					<div className="card-content">
						<span className="card-title">Contact Me</span>
						<form>
							<div className="row">
								<div className="input-field col s6">
									<input id="first_name" type="text" className="validate" />
									<label for="first_name">First Name</label>
								</div>
								<div className="input-field col s6">
									<input id="last_name" type="text" className="validate" />
									<label for="last_name">Last Name</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="email" type="email" className="validate" />
									<label for="email">Email</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<textarea id="message" className="materialize-textarea" />
									<label for="message">Message</label>
								</div>
							</div>
							<div className="row center-align">
								<button className="btn teal">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
