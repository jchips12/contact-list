(function(angular) {

	'use strict';

	var Numeric = function() {
		var numeric = {};

		numeric.require = 'ngModel';
		numeric.restrict = 'A';
		numeric.link = function(scope, element, attr, ctrl) {
			
			var formatTel = function(value) {
				if (typeof value === 'undefined') {
					return '';
				}
				value = value.toString().replace(/[^0-9]/g, '');
				var returnVal = '';
				switch (value.length) {
				case 0:
					break;
				case 1:
				case 2:
				case 3:
					returnVal = "(" + value.slice(0, value.length);
					break;
				case 4:
				case 5:
				case 6:
					returnVal = "(" + value.slice(0, 3) + ")" + value.slice(3, value.length);
					break;
				case 7:
				case 8:
				case 9:
				case 10:
					returnVal = "(" + value.slice(0, 3) + ")" + value.slice(3, 6) + "-" + value.slice(6, value.length);
					break;
				default:
					returnVal = "(" + value.slice(0, 3) + ")" + value.slice(3, 6) + "-" + value.slice(6, 10);
				}
				return returnVal;
			};
			
			ctrl.$formatters.push(function(modelValue) {
				if (typeof modelValue === 'undefined' || modelValue === null) {
					return null;
				}
				if(modelValue.toString().length > 10) {
					ctrl.$setViewValue(formatTel(modelValue));
					ctrl.$render();
				}
				return formatTel(modelValue);
			});

			ctrl.$parsers.push(function(viewValue) {
				if (typeof viewValue === 'undefined' || viewValue === null) {
					return null;
				}
				if(viewValue !== formatTel(viewValue)) {
					ctrl.$setViewValue(formatTel(viewValue));
					ctrl.$render();
				}
				return viewValue.toString().replace(/[^0-9]/g, '').slice(0,10);
			});

			scope.$watch(attr.ngModel, function(newVal, oldVal) {
				if (typeof newVal === 'undefined' || newVal === null ) {
					return null;
				}
				ctrl.$setViewValue(formatTel(newVal));
				ctrl.$render();
			}, true);
		}

		return numeric;
	}

	angular.module('contact.directives').directive('numeric', Numeric);
})(angular);