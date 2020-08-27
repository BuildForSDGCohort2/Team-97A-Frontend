import React from 'react';
import './register.css';
import logo from '../../../../images/CariGo_logo.png';

const forgotPassword = () => {
	return (
		<div className="owner">
			<header>
				<div className="nav-bg">
					<figure>
						<img className="logo" src={logo} alt="amebo-logo" />
					</figure>
					<nav>
						<ul className="nav-bg-one">
							<li>
								<a href="#">How it works</a>
							</li>
							<li>
								<a href="#">Features</a>
							</li>
							<li>
								<a href="#">FAQ</a>
							</li>
						</ul>
						<ul className="nav-bg-two">
							<li>
								<a href="" className="login-btn">
									Login
								</a>
							</li>
							<li>
								<button className="register">
									Get Started <span>&LongRightArrow;</span>
								</button>
							</li>
						</ul>
					</nav>
					<div className="ham-container">
						<div className="harmburger">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</header>

			<div className="sign-up-form-container">
				<div className="shell">
					<div className="sign-up-space">
						<h4 className="space-header-one">Sign up as a </h4>
						<h1 className="space-header-two">Cargoe Owner</h1>
						<figure className="forgottalkative"></figure>
					</div>

					<div className="form-container">
						<form action="" method="post" className="signup">
							<div className="form-header">
								<div className="inp-grp-header">
									<h3>Forgot Password</h3>
								</div>
							</div>
							<div className="inp-grp">
								<div>Please enter your registered email</div>
								<div>A reset password link would be sent</div>
							</div>

							<div className="inp-grp">
								<div>
									<input type="email" placeholder="Email" name="email" id="email" />
								</div>
							</div>
							<div className="inp-grp">
								<div>
									<input type="submit" value="Send link" name="signup" id="signup" />
								</div>
							</div>
							<div className="inp-grp">
								<p className="password-forgot">
									Already have an account? <a href="#">sign-in here</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>

			<footer>
				<div className="social-icons">
					<figure>
						<i className="fab fa-twitter fa-2x"></i>
						<i className="fab fa-facebook fa-2x"></i>
						<i className="fab fa-github fa-2x"></i>
					</figure>
				</div>
				<div>&copy; Team Amebo | All rights reserved 2020</div>
			</footer>
		</div>
	);
};

export default forgotPassword;
