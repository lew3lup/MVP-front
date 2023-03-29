import React from "react"
import {createRoot} from "react-dom/client"
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import Footer from "./footer/footer"
import "./theme.scss"

interface ApplicationProps {};

interface ApplicationState {
	page: string
}

class Application extends React.Component<ApplicationProps, ApplicationState> {
	constructor (props: any) {
		super (props);

		this.state = {
			page: "home"
		}
	}

	setPage (page: string) {
		this.setState({page: page});
	}

	render () {
		return <div id="application">
			<Header 
				level={9}
				levelProgress={0.7}
				eth={0.00018}
				coins={8535}
				profileImage={"resources/avatars/default.png"}
				hash="0xd034739c2ae807c70cd703092b946f62a49509d1"
			/>
			<Sidebar
				active={this.state.page}
				setPage={this.setPage.bind(this)}
			/>
			<Footer
				setPage={this.setPage.bind(this)}
			/>
		</div>;
	}
}

const root = createRoot(document.getElementById("root") as Element);
root.render(<Application />);