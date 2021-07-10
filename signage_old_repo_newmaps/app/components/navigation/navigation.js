(function(){
        angular
        .module( "navigation", [] )
        .directive("navigation", function(){
		function link(scope, elem, attrs){
			scope.toggleNav = function (){
                                let body = document.querySelector("body")
				!body.classList.contains("navOpen") ?
					body.classList.add("navOpen") :
					body.classList.remove("navOpen")
			}
		}
		function compile(){
			return function(scope, elem, attrs){
				link(scope, elem, attrs);
			}
		}
		return {
			restrict: "AE",
			scope: {
				institution: "<",
				clock: "<"
			},
			templateUrl: "app/components/navigation/navigation.html",
			link: link,
			compile: compile
		}
        });
})();