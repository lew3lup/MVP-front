import React from "react"

import "./sidebar.scss"

type SidebarProps = {
	active: string,
	setPage: (page: string) => void
}

const MenuItems = [
	{
		name: "home",
		title: "Home",
		image: "./resources/home"
	},
	{
		name: "catalogue",
		title: "Game catalogue",
		image: "./resources/catalogue"
	},
	{
		name: "tournaments",
		title: "Tournaments",
		image: "./resources/quests"
	},
	{
		name: "quests",
		title: "Game quests",
		image: "./resources/quests"
	},
	{
		name: "clans",
		title: "Clans",
		image: "./resources/clans"
	},
	{
		name: "rating",
		title: "User rating",
		image: "./resources/rating"
	}
];

const Links = [
	{
		name: "Blog",
		ref: "#"
	},
	{
		name: "FAQ",
		ref: "#"
	},
	{
		name: "Advertising",
		ref: "#"
	},
	{
		name: "About us",
		ref: "#"
	}
];

function Sidebar (props: SidebarProps): JSX.Element {
	return <div id="sidebar">
		{MenuItems.map((item: {name:string, title:string, image:string}, index: number): JSX.Element => {
			if (props.active === item.name) {
				return <div className="sidebar-menu-item active" key={index}>
					<img className="sidebar-menu-item-image" src={item.image + "_active.svg"} />
					<span>{item.title}</span>
					<img className="sidebar-menu-item-gem" src="./resources/gem.svg" />
				</div>
			} else {
				return <div className="sidebar-menu-item" onClick={(): void => {props.setPage(item.name)}} key={index}>
					<img className="sidebar-menu-item-image" src={item.image + "_inactive.svg"} />
					<span>{item.title}</span>
				</div>
			}
		})}
		<hr></hr>
		{
			Links.map((item: {name: string, ref: string}, index: number): JSX.Element => {
				return <a href={item.ref} key={index} className="sidebar-menu-link">{item.name}</a>
			})
		}
	</div>
}

export default Sidebar