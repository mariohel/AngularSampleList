'use strict';
(function() {
	 angular.module('crossApp.home')
	  .config(['$routeProvider', function($routeProvider) {
	  $routeProvider
		  .when('/home', {
			templateUrl: 'modules/home/home.page.html',
			controller: 'crossApp.home.homeController'
		  });	
	  }]);

})();




