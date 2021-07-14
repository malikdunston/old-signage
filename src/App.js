import { Component } from "react";
	import "./assets/css/index.min.css";
	import { BrowserRouter as Router, Route } from "react-router-dom";
	import FloorPlan from "./components/FloorPlan.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
			building: null,
			floor: null
		}
		this.getData = this.getData.bind(this); 
	}

	async componentDidMount(){
		let data = await this.getData();
		console.log("data is: ", data);
		this.setState({
			building: data.campus.building,
			floor: [data.campus.building.floor[0]]
		})
	}

	async getData(){
		let url = new URL("https://dev.malikdunston.com/data/digitalsignage/api/");
		let params = {
			institution: "tech",
			campus: "main",
			building: "nano",
			floor: "all"
		}
		url.search = new URLSearchParams(params).toString();
		return  await fetch(url).then(resp => resp.json());
	}

	render() {
		return <Router>
			<Route exact
				path="/"
				render={()=>{
					if(this.state.building){
						return <div>
							{this.state.building.name_long}
							{this.state.building.about}
							{this.state.floor.map(f=>{
								return <FloorPlan
									floor={f}>
								</FloorPlan>
							})}
						</div>
					}else {
						return <div>loading.....</div>
					}
				}}
			/>
		</Router>
	}
}

export default App;