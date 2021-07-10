import { Component } from "react";
import "./assets/css/index.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//app-wide components
import Navigation from "./components/Navigation.js";
import Menu from "./components/Menu.js";
// places components
import Map from "./components/Map.js";
// content components
import Directory from "./components/Directory.js";
import Home from "./routes/Home";

class App extends Component {
	constructor() {
		super();
		this.state = {
			url: "http://api/",
			key: "tech",
			menu: {
				places: [["campus", "building", "floor", "room"],
				["campuses", "buildings", "floors", "rooms"]],
				content: [["customer", "player", "playlist", "item"],
				["customers", "players", "playlists", "items"]],
			},
			loading: true
		}
		this.getData = this.getData.bind(this);
	}
	async getData(params = {}) {
		params["institution"] = this.state.key;
		const url = new URL(this.state.url);
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
		const response = await fetch(url);
		const data = await response.json();
		return data
	}
	async componentDidMount() {
		const data = await this.getData({ children: 1 });
		this.setState({ institution: data[0], loading: false });
	}
	render() {
		const frame = (thisRoute) => <div>
			<Navigation data={this.state["institution"]} />
			<Route exact path="/" component={Home} />
			<Menu
				institution={this.state["institution"]}
				menu={this.state.menu["places"]}
				pathname={thisRoute.location.pathname.split("/")[1]}
				params={thisRoute.match.params} />
		</div>
		const app = <div className="App">
			<Router>
				<Route path="/" render={(thisRoute) => (frame(thisRoute))} />
				<Route path="/places/:campus?/:building?/:floor?/:room?"
					render={(places) => (
						<div id="places">
							<Map
								institution={this.state["institution"]}
								params={places.match.params}
								getData={this.getData} />
						</div>
					)} />
			</Router>
		</div>;
		return this.state.loading ? <div>loading app</div> : app
	}
}

export default App;