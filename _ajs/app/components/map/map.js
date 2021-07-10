(function(){
        angular
        .module( "map", [] )
        .directive("map", function($sce, $state, $http){

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

		return {
			restrict: 'AE',
			scope: {
				location: "<"
			},
			templateUrl: 'app/components/map/map.html',
			compile: compile,
			link: link
		}
        });
})();