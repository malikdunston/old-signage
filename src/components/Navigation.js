import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
        constructor(props){
                super(props);
        }
	render(){
		return (
                        <nav>
                                <Link to="/">
                                        <div className="logo">{this.props.data.name_long}</div>    
                                </Link>
                                <ul>
                                        <Link to="/places">
                                                <li>Places</li>
                                        </Link>
                                        <Link to="/content">
                                                <li>Content</li>
                                        </Link>
                                </ul>
                        </nav>
		)
	}
}

export default  Navigation;