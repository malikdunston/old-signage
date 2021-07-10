(function(){
        angular
        .module( "places", [] )
	.config(function($stateProvider){
		$stateProvider.state('places', {
			url: '/places?campus?building?floor?room', controller: "placesCtrl", controllerAs: "places",
			templateUrl: "./app/routes/places/places.html",
			resolve: {
				buildings: function($http, $stateParams){
					return $http.get($api, {
						params: {
							institution: $id, 
							building: $stateParams.building || "all",
							campus: $stateParams.campus,
							children: 1
						}
					}).then(function(resp){
						return resp.data
					})
				},
				campuses: function($http, $stateParams, buildings){
					let children;
					$stateParams.building ?
						children = 0 :
						children = 1
					return $http.get($api, {
						params: {
							institution: $id, 
							campus: $stateParams.campus,
							children: children
						}
					}).then(function(resp){
						if(buildings.length > 0) {
							resp.data[0].buildings = buildings;
						}
						return resp.data
					})
				}
			}
		})
	}).controller("placesCtrl", function($stateParams){
		let places = this;
		console.log(places);
		places.params = $stateParams
	});
})();