(function() {
	var module = angular.module('contact', [ 'ui.router' ]);

	module.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('home', {
			url : '/home',
			templateUrl : 'html/home.html',
			controller : 'homeCntrl'
		}).state('about', {
			url : '/about',
			templateUrl : 'html/about.html',
			controller : 'aboutCntrl'
		})
	});
})();