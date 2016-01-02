(function(){
	
	'use strict';
	
	var utils = function() {
		var utils = {};
		
		utils.isNull = function(obj) {
			if(typeof obj === 'undefined' || obj === null || obj === '') {
				return true;
			} else {
				return false;
			}
		};
		
		return utils;
	}
	
	angular.module('app.services').service('utils', Utils);
})();