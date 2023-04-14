import React from "react"

import "./level.scss"

type LevelProps = {
	minified: boolean,
	level: number,
	levelProgress: number
};

function Level (props: LevelProps): JSX.Element {
	if (props.minified) {
		return <div className="level-bar-small">
			<div className="indication">
				<span className="number">{props.level}</span>
				<img src="resources/gem.svg" />
				<span className="title">lvl</span>
			</div>
			<div className="bar">
				<div style={{width: props.levelProgress*100 + "%"}}></div>
			</div>
		</div>
	} else {
		return <div></div>
	}
}

export default Level;