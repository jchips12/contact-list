(function() {
	angular.module('contact.controllers', []);
	angular.module('contact.services', []);
	angular.module('contact.directives', []);
	angular.module('contact.config', [ 'ui.router' ]);
	angular.module('contact', ['contact.config', 'contact.directives', 'contact.services', 'contact.controllers']);
})();