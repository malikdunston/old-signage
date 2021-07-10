(function(){
        angular
        .module( "weather", [] )
        .directive("weather", function($sce, $state, $http){
		function link(scope, elem, attrs) {
                        $http.get($api, {params: {
                                institution: $id,
                                q: "weather"
                        }}).then((resp)=>{
                                scope.weather = {
                                        temp: resp.data[1].weather.w1.temp_f,
                                        current: resp.data[1].weather.properties.periods.filter(num=>num.number == 1)[0],
                                        forecast: resp.data[1].weather.properties.periods.filter(num=>num.number > 1)
                                }
                                scope.weather.current.shortForecast = resp.data[1].weather.w1.weather;
                        });
                }
		function compile() {
			return function (scope, elem, attrs) {
				link(scope, elem, attrs);
			}
		}
		return {
			restrict: 'AE',
                        scope: {
                                time: "@time"
                        },
			templateUrl: 'app/components/weather/weather.html',
			compile: compile,
			link: link
		}
        });
})();