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
				var returnVal = '';
				switch (value.length) {
				case 0:
					break;
				case 1:
				case 2:
					returnVal = "(" + value.slice(0, value.length);
					break;
				case 3:
					returnVal = "(" + value.slice(0, 3) + ")";
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

			ctrl.$formatters.push(formatTel);

			ctrl.$parsers.push(function(viewValue) {
				if (typeof viewValue === 'undefined' || viewValue === null) {
					return '';
				} else {
					return viewValue.toString().replace(/[^0-9]/g, '');
				}
			});

			$(element).on('keyup', function() {
				ctrl.$setViewValue(formatTel(ctrl.$modelValue));
				ctrl.$render();
			});
			
			scope.$watch(attr.ngModel, function(newVal, oldVal) {
				ctrl.$setViewValue(formatTel(ctrl.$modelValue));
				ctrl.$render();
			}, true);
		}

		return numeric;
	}

	angular.module('contact.directives').directive('numeric', Numeric);
})(angular);