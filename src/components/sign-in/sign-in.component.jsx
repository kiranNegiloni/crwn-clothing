import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in.style.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="signin">
				<h2>I already have an account</h2>
				<h4>Sign in with your email and password</h4>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						id="email"
						type="text"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
					/>
					<FormInput
						id="password"
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
					/>
					<CustomButton type="submit" onClick={this.handleSubmit}>
						Sign in
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
