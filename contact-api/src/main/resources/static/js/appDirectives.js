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
				var num1='';
				var num2='';
				var num3='';
				switch (value.length) {
				case 1:
				case 2:
					num1 = "(" + value.slice(0, value.length);
					break;
				case 3:
					num1 = "(" + value.slice(0, 3) + ")";
					break;
				case 4:
				case 5:
				case 6:
					num1 = "(" + value.slice(0, 3) + ")";
					num2 = value.slice(3, value.length);
					break;
				case 7:
				case 8:
				case 9:
				case 10:
					num1 = "(" + value.slice(0, 3) + ")";
					num2 = value.slice(3, 6);
					num3 = "-" + value.slice(6, value.length);
					break;
				default:
					return value;
				}
				return num1 + num2 + num3;
			};

			ctrl.$formatters.push(function(modelValue) {
				if (typeof modelValue === 'undefined') {
					return '';
				}
				var num1='';
				var num2='';
				var num3='';
				switch (modelValue.length) {
				case 1:
				case 2:
					num1 = "(" + modelValue.slice(0, modelValue.length);
					break;
				case 3:
					num1 = "(" + modelValue.slice(0, 3) + ")";
					break;
				case 4:
				case 5:
				case 6:
					num1 = "(" + modelValue.slice(0, 3) + ")";
					num2 = modelValue.slice(3, modelValue.length);
					break;
				case 7:
				case 8:
				case 9:
				case 10:
					num1 = "(" + modelValue.slice(0, 3) + ")";
					num2 = modelValue.slice(3, 6);
					num3 = "-" + modelValue.slice(6, modelValue.length);
					break;
				default:
					return modelValue;
				}
				return num1 + num2 + num3;
			});

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