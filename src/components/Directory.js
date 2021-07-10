import React, { Component } from "react";

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		}
	}
	async componentDidMount() {
		console.log(this)
		let data = await this.props.getData()
		console.log(data);
		this.setState({ example: data, loading: false });
	}
	render() {
		let directory = <div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Role</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Mance Ellenburg</td>
						<td>Director</td>
						<td>1208</td>
					</tr>
				</tbody>
			</table>
		</div>

		return directory
	}
}

export default Directory;