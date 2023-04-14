import React from "react"

import "./footer.scss"

type FooterProps = {
	lang?: string,
	setPage: (page: string) => void
}

function Footer (props: FooterProps): JSX.Element {
	return <div id="footer">
		<div id="footer-left">
			<div id="footer-left-title"><img src="resources/logo.svg"/><span>LEW3L UP</span></div>
			<div id="footer-left-copyright">&copy; All rights reserved. Web 3 technology gaming community</div>
			<div id="footer-left-social">
				<a href="#">
					<img src="resources/social/telegram.svg" />
				</a>
				<a href="#">
					<img src="resources/social/twitter.svg" />
				</a>
				<a href="#">
					<img src="resources/social/facebook.svg" />
				</a>
				<a href="#">
					<img src="resources/social/discord.svg" />
				</a>
				<a href="#">
					<img src="resources/social/medium.svg" />
				</a>
			</div>
		</div>
		<div className="footer-col">
			<span className="footer-col-title">Main</span>
			<a href="#" onClick={() => {props.setPage("home")}}>Home</a>
			<a href="#" onClick={() => {props.setPage("catalogue")}}>Games</a>
			<a href="#" onClick={() => {props.setPage("tournaments")}}>Tournaments</a>
			<a href="#" onClick={() => {props.setPage("clans")}}>Clans</a>
		</div>
		<div className="footer-col">
			<span className="footer-col-title">Info</span>
			<a href="#">Blog</a>
			<a href="#">FAQ</a>
			<a href="#">Advertising</a>
			<a href="#">About us</a>
		</div>
		<div className="footer-col">
			<span className="footer-col-title">Other</span>
			<a href="#">Terms of use</a>
			<a href="#">Privacy</a>
			<a href="#">Docs</a>
			<a href="#">Contact us</a>
		</div>
	</div>
}

export default Footer