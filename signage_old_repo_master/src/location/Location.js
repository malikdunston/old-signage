import React, { Component } from "react";

class Location extends Component {

	constructor(props){
		super(props);
                this.state = {
                        campuses: []
                }
	}

	componentDidMount(){
                console.log(this.props);
	}

	render(){
		return (
			<div className="wrap">
                                Location!!!
			</div>
		)
	}
}

export default  Location;