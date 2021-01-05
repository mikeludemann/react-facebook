import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

class Facebook extends Component {
	componentDidMount(){
		var js = document.createElement("script");

			js.innerHTML= `
				(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.1';
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			`;

			document.getElementsByTagName("body").item(0).appendChild(js);
	}
	render() {
		return (
			<div id="facebook--container">
				<div id="fb-root"></div>
				<div class="fb-post" data-href={this.props.postURL} data-show-text="true"></div>
			</div>
		);
	}
}

Facebook.propTypes = {
	postURL: PropTypes.string.isRequired
}

// ------------------------------------------------------------------------------------

class FacebookMessenger extends Component {

	render() {
		return (
			<div id="facebookMessenger">
				<a href={"https://m.me/" + this.props.username} target="_blank">
					<div>
						<i class="fab fa-facebook-messenger fa-2x">{this.props.text}</i>
					</div>
				</a>
			</div>
		)
		}

}

FacebookMessenger.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string
}

// ------------------------------------------------------------------------------------

export {
  Facebook,
  FacebookMessenger
}