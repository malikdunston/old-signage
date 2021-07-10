import React, { Component } from "react";

class Content extends Component {

	constructor(props){
		super(props);
                this.state = {
                        customers: []
                }
	}

	componentDidMount(){
                console.log(this.props);
	}

	render(){
		return (
			<div className="wrap">
                                Content!!!
			</div>
		)
	}
}

export default  Content;