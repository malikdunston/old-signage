import { Component } from "react";
import "./assets/css/index.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// components
import Navigation from "./components/Navigation.js";
import Location from "./location/Location.js";
import Content from "./content/Content.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
			institution: {}
		}
		this.getData = this.getData.bind(this);
		this.dataError = this.dataError.bind(this);
	}
	getData(params, callback) {
		axios.get("https://forms.digitalsignage.gatech.edu/tech-json", { params: params })
			.then(data => data = data.data)
			.then(data => {
				callback(data);
			}).catch(err => this.dataError(err))
	}
	dataError(error) {
		console.log(error);
	}
	componentDidMount() {
		this.getData(
			{ institution: "tech" },
			(data) => {
				this.setState({
					institution: data[0]
				}, () => (console.log("app", this.state)));
			}
		);
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Navigation
						institution={this.state.institution} />
					<Route
						path="/location"
						render={(thisRoute) => (
							<Location
								thisRoute={thisRoute}
								getData={this.getData}
								dataError={this.dataError} />
						)} />
					<Route
						path="/content"
						render={(thisRoute) => (
							<Content
								thisRoute={thisRoute}
								getData={this.getData}
								dataError={this.dataError} />
						)} />
				</div>
			</Router>
		);
	}
}

export default App;