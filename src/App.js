import { Component } from "react";
	import "./assets/css/index.min.css";
	import { BrowserRouter as Router, Route } from "react-router-dom";

	import Map from "./components/Map.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
		}
	}
	render() {
		return <Router>
			<Route exact
				path="/"
				render={()=>{
					return <div>
						<Map>
						</Map>
					</div>
				}}
			/>
		</Router>
	}
}

export default App;