import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		}
	}
	getChild(parent, level = 0){
		let nxt = level + 1;
		let thisTables = this.props.menu[1][level];
		let thisTable = this.props.menu[0][level];
		let lookingFors = this.props.menu[1][nxt];
		let lookingFor = this.props.menu[0][nxt];
		console.log(thisTable, level, lookingFor, this.props.menu[0].length - 1);
		return (level <= this.props.menu[0].length - 2)
		? 
			<li className={`${thisTable} ${parent.name_short || parent.level}`}>
				{parent.name_long || parent.number || ("floor " + parent.level) || ("room " + parent.number)}
				<ul className={`${lookingFors}`}>
					{parent[lookingFors].map(child => {
						<li className={`${lookingFor}`}>
							{this.getChild(child, nxt)}
						{/* {return !parent.name_short
						? (lookingFor + ": " + child.number)
						: 
							this.getChild(child, nxt)} */}
						</li>
					})}
				</ul>
			</li>
		: <div>error</div>
	}
	renderInst(parArray){
	// use props from frame elem
	// to run getChild on either leg of the api
		return parArray.length > 0 
		? <ul id="menu" className={`${"institution"}`}>
			{parArray.map(parent => {
				return this.getChild(parent)
			})}
		</ul>
		: <div>no menu data. :(</div>
	}
	render() {
		return this.renderInst(this.props["institution"]["campuses"])
	}
}
export default Menu;