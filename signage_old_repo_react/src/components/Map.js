import React, { Component } from "react";
import {Link} from "react-router-dom";
class Map extends Component {
constructor(props){
        super(props);
        this.state = {
                loading: true,
        }
}

render(){
        let map = <div>
                <h1>This is a map</h1>
        </div>
        return this.state.loading ? <div>loading map...</div> : map
}
}

export default  Map;