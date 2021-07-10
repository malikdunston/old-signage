import React, { Component } from "react";
import {Link} from "react-router-dom";
class Map extends Component {
componentDidMount(){
	function stripSVG(data) {
		let jsWrapper = document.createElement("div");
		jsWrapper.innerHTML = data;
		let dataSvg = jsWrapper.querySelector("svg");
		console.log(document.querySelector("map"));
		let mapSvg = document.querySelector("map svg");
		mapSvg.setAttribute("viewBox", dataSvg.getAttribute("viewBox"));
		let mapData = {
			floor: jsWrapper.querySelector("svg > g[id^=floor]").innerHTML,
			rooms: jsWrapper.querySelectorAll("svg > g:not([id^=floor])")
		}
		return mapData
	}
	function labelRoom(roomNode, category) {
		console.log(roomNode);
		let text = roomNode.querySelector("text");
		let matrix = text.getAttribute("transform").split("(")[1].split(")")[0];
		let m = matrix.split(" ");
		let room = {
			type: category,
			number: text.innerHTML || "room",
			data: $sce.trustAsHtml(roomNode.innerHTML),
			center: {
				x: (m[4] - 10),
				y: (m[5] - 10)
			}
		}
		if (category != "room") {
			console.log(category);
			$http.get("assets/icons/" + category + ".svg").then(function (data) {
				room.icon = $sce.trustAsHtml(data.data);
			});
		}
		return room
	}
	function getRooms(thisFloor, roomTypes) {
		thisFloor.rooms = [];
		roomTypes.forEach(function (type) {
			let category = type.getAttribute("id");
			let catChildren = type.querySelectorAll("g");
			catChildren.forEach(function (roomNode) {
				let room = labelRoom(roomNode, category);
				thisFloor.rooms.push(room);
			})
		})
		return thisFloor.rooms
	}
	function link(scope, elem, attrs) {
		console.log(scope, elem);
		let thisCampus = scope.$parent.places.$resolve.campuses[0];
		if (scope.location.floor) {
			let thisFloor = thisCampus.buildings[0].floors[0];
			let xmlSVG = thisFloor.floorplan;
			let newSVG = stripSVG(xmlSVG);
			scope.floorplan = {
				floor: newSVG.floor,
				rooms: getRooms(thisFloor, newSVG.rooms)
			}
		}
	}
	function compile() {
		return function (scope, elem, attrs) {
			link(scope, elem, attrs);
			if (scope.location.floor) {
				elem[0].querySelector("svg .floor").innerHTML = scope.floorplan.floor;
				scope.rooms = scope.floorplan.rooms;
			}
			elem[0].addEventListener("click", function (event) {
				console.log(event.target.tagName);
				if (event.target.tagName != "SPAN") {
					let newparams = {
						campus: scope.location.campus,
						building: scope.location.building,
						floor: scope.location.floor,
						room: event.target.parentNode.id.slice(5)
					};
					$state.go("places", newparams);
				}
			});
		}
	}
}
render(){
	return <svg>
		<g class="floor">
		</g>
		<g class="shapes">		
			<g id="{{'room_' + room.number}}"
				class="{{room.type}}" 
				ng-class="{selected: room.number == location.room}"
				ng-repeat="room in rooms" >
				<g class="shape" 
					ng-bind-html="room.data">
				</g>
				<svg ng-if="room.type == 'staircase'" viewBox="0 0 57.1 100" width="20" height="20" x="{{room.center.x}}" y="{{room.center.y}}">
					<g class="icon">
						<path class="cls-1" d="M80.62,32H56.4V55.92H32.18v24H0v-7.5H21.82V51.21l2.82-2.82H45.81V24.14H72.05V0h28V7.78H80.62Z"/>                                        </g>
				</svg>
				<svg ng-if="room.type == 'restroom'" viewBox="0 0 57.1 100" width="20" height="20" x="{{room.center.x}}" y="{{room.center.y}}">
					<g class="icon">
						<path class="cls-1" d="M15.64,77.25C12.37,74.66,8.7,72.94,6.23,69S3.53,60.29.66,55.51c4,1.31,7.22,1.71,9.64,3.3,2.92,1.93,6.29.12,8.62,1.48,3.23,1.88,6.33,1,9.47,1.18s6.94.71,9.66-.58c3-1.43,6,.19,8.75-1.2s5.56-2.34,8.39-3.5c2,3.09-.46,6.13-1.27,8.87-1.32,4.45-5.55,7.26-8.8,10.54-3,3-7.14,3.36-10.92,4.51-7.78,3.59-13.82,2.66-18.56-2.86"/><path class="cls-1" d="M35.62,81.54l6.52-1.34c.63.63,1.29,1.3,1.82,1.82,1,5.1-1.21,10.37,1.92,15.57L43.62,100H14.82l-2.07-2.07c.87-3.46-1.34-7.47,1.31-11.54,1-1.5.15-4.15.15-6.28,7.16.21,14.18,2.42,21.41,1.43"/><path class="cls-1" d="M57.1,5A14.2,14.2,0,0,1,48.71,7.3q-20.25-.18-40.5,0A13.53,13.53,0,0,1,0,5.05C3.83,2.13,9,.12,12.88.11c9.95,0,19.91-.3,29.84.12C47.77.44,53.06,1.1,57.1,5"/><path class="cls-1" d="M44.52,49.44l4.39,2.82c-2,1.29-3.73,2.38-4.41,2.8a60.09,60.09,0,0,1-32,0L8.07,52.24l4.4-2.81a60.22,60.22,0,0,1,32.05,0"/><path class="cls-1" d="M.06,8.91V42.14l1.74,2H55.13l1.76-1.77V8.91Zm10.7,8.26c-1.66-2.2-4-2.72-6.36-3.38-.17,0-.12-.84-.22-1.64,2.45-1.56,5.31.12,8.7-1.26.71,2.55,1.15,4.15,1.76,6.36C12.86,17.25,11.16,17.7,10.76,17.17Z"/>
					</g>
				</svg>
			</g>
		</g>
	</svg>
}
}

export default  Map;