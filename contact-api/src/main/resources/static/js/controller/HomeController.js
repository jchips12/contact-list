(function(angular) {
	
	'use strict';
	
	var HomeController = function($scope, $http) {
		
		$http({
			method : 'GET',
			url : '/person/1'
		}).then(function successCallback(response) {
			$scope.status = response.status;
			$scope.person = response.data;
			$scope.person.personId = '1234567890123';
		}, function errorCallback(response) {
			$scope.status = response.status;
			$scope.error = response.data;
		});
		
	}
	
	HomeController.$inject = ['$scope', '$http'];
	angular.module('contact.controllers').controller('homeCntrl', HomeController);
	
})(angular);
