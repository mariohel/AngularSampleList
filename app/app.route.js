/**
 * The main Route  
 * 
 */
(function () { 
	'use strict';
	angular.module('crossApp')
	.config(['$routeProvider','$locationProvider',RouteConfig]);
	
	function RouteConfig($routeProvider, $locationProvider) {
		
		  $routeProvider.otherwise({redirectTo: '/home'});	 
		  $locationProvider.html5Mode(true);		  
		 
	}

})();

