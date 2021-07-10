const $id = 1, $api = "http://api:8081/";

(function () {
        angular.module("now-playing", [
		"ui.router",
		"home", "places",
		"navigation", "map", "weather"
	]).config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
	}).controller("appCtrl", function ($http, $interval) {
		let app = this;
		$http.get($api, {params: {
			institution: $id,
		}}).then((resp) => {app.data = resp.data[0]; });
		app.clock = {
			tick: function () {
				app.clock.time = new Date();
				if(app.clock.time.getHours() > 7 && app.clock.time.getHours() < 19){
					app.clock.timeOfDay = "day";
				}else app.clock.timeOfDay = "night"
			},
		}
		$interval(app.clock.tick, 1000);
	}).directive("accordion", () => {
		return {
			restrict: 'A',
			scope: {
				data: "<"
			},
			link: (s, e) => {
				let accordion =  (data, elem) => {
					(typeof data == "object" && data !== null) ? iterate() : elem.innerHTML = data;
					return elem;
					function iterate() {
						for ([key, value] of Object.entries(data)) {
                                                        // if(key.includes("name_long")){
                                                                // console.log(key);
                                                                let btn = document.createElement("button"),
                                                                cont = document.createElement("div"),
                                                                fold = document.createElement("div");
                                                                if (!Array.isArray(data)) {
                                                                        btn.innerHTML = key; btn.classList.add("btn");
                                                                        cont.style.overflow = "hidden";	cont.style.maxHeight = "0px"; cont.style.margin = "0px";
                                                                        fold.appendChild(btn); fold.appendChild(cont); fold.classList.add("fold");
                                                                }
                                                                accordion(value, cont);
                                                                fold.appendChild(cont);
                                                                btn.addEventListener("click", () => {
                                                                        fold.classList.toggle("open");
                                                                        cont.style.maxHeight !== "0px" ?
                                                                                cont.style.maxHeight = "0px" :
                                                                                cont.style.maxHeight = "500vh";
                                                                });
                                                                elem.appendChild(fold);
                                                        // }
						}
					}
				}
				s.$watch("data", function(newData){
					var acc = accordion(newData, document.createElement("div"));
					e[0].appendChild(acc)
				})
			}
		}
	}).directive("whatTime", ($interval, $rootScope) => {
		return {
			restrict: 'A',
			scope: {
				x: "<"
			},
			link: (s, e, a) => {
				// function tick(){
					let dt = new Date();
                                        let h = dt.getHours();
					(dt.getHours() > 7 && s.dt.getHours() < 19) ?
						$rootScope.timeOfDay = "day" :
						$rootScope.timeOfDay = "night";
					// return s
				// };
                                console.log(h);
				console.log(s, e, a);
				// $interval(tick, 1000);
			}
		}
	});
})()