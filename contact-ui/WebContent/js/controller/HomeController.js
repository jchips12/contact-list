(function() {
	var module = angular.module('contact');
	module.controller('homeCntrl', function($scope) {
		$scope.bigData = {};

		$scope.bigData.names = [ 'John', 'Carlo', 'JC', 'Juan', 'Carlos' ];
	});
})();
