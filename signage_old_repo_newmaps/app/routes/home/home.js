(function(){
        angular
        .module( "home", [] )
	.config(function($stateProvider){
		$stateProvider.state('home', {
			url: '/', controller: "homeCtrl", controllerAs: "home",
			templateUrl: "./app/routes/home/home.html",
			resolve: {
				campuses: $http => {
					return $http.get($api, {
						params: {
							institution: $id, 
							campus: "all",
							children: 1
						}
					}).then(resp => {
                                                let data = resp.data[0];
                                                return data
                                        })
				},
				customers: $http => {
					return [{name: "IEN"}, {name: "scheller"}]
				}
			}
		})
	}).controller("homeCtrl", function(campuses, customers){ 
		let home = this;
		home.data = {campuses: campuses, customers: customers};
	 });
})();