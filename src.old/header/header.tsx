import { useState } from "react"
import Ethereum from "../common/ethereum"
import Level from "../common/level"

import "./header.scss"

type HeaderProps = {
	level: number,
	levelProgress: number,
	eth: number,
	coins: number,
	profileImage: string,
	hash: string
}

type HeaderState = {
	searchString: string
}

type ProfileProps = {
	profileImage: string,
	hash: string
}

function Profile (props: ProfileProps): JSX.Element {
	const hashStr = props.hash.slice(0,5) + "..." + props.hash.slice(-5);

	return <div id="header-profile">
		<img src={props.profileImage} />
		<span>{hashStr}</span>
	</div>
}

function Header (props: HeaderProps): JSX.Element {
	const [state, setState] = useState<HeaderState>({searchString: ""});

	return <div id="header">
		<a href="#" id="header-logo">
			<img src="resources/logo.svg" />
			<span>LEW3L UP</span>
		</a>
		<div id="header-search">
			<img src="resources/looking_glass.svg" />
			<input id="header-search" type="text" value={state.searchString} onChange={(e) => {setState({searchString: e.target.value})}}/>
		</div>
		<Ethereum />
		{/* <Coins /> */}
		<Level minified={true} level={props.level} levelProgress={props.levelProgress} />
		<Profile profileImage={props.profileImage} hash={props.hash} />
	</div>
}

export default Header