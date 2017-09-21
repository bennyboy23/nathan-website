import React, { Component } from 'react';

class Contact extends Component {
	state = {};
	render() {
		return (
			<div class="row">
				<form class="col s12">
					<div class="row">
						<div class="input-field col s6">
							<input id="first_name" type="text" class="validate" />
							<label for="first_name">First Name</label>
						</div>
						<div class="input-field col s6">
							<input id="last_name" type="text" class="validate" />
							<label for="last_name">Last Name</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;