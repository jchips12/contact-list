(function(angular) {

	'use strict';

	var AppConfig = function($stateProvider, $urlRouterProvider) {
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
	}

	AppConfig.$inject = [ '$stateProvider', '$urlRouterProvider'];

	angular.module('contact.config').config(AppConfig);

})(angular);