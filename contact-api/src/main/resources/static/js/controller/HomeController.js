(function() {
	var module = angular.module('contact');
	module.controller('homeCntrl', function($scope, $http) {
		$http({
			method : 'GET',
			url : '/person/1'
		}).then(function successCallback(response) {
			$scope.status = response.status;
			$scope.person = response.data;
		}, function errorCallback(response) {
			$scope.status = response.status;
			$scope.error = response.data;
		});
	});
})();
