import React, { Component } from "react";
import {Link} from "react-router-dom";

class Home extends Component {
constructor(props){
        super(props);
        this.state = {
                loading: true,
        }
}
componentDidMount(){
	this.setState({loading: false});
}
render(){
	let home = <div>
		<h1>DS&S - Home</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi.</p>
	</div>
	return this.state.loading ? <div>loading homepage...</div> : home
}}

export default  Home;