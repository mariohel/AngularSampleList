(function () { 
	'use strict';
	angular.module('crossApp.home')
	.factory('HomeService', ['$q','$http',HomeService]);
	
	function HomeService($q,$http) {	
		  
		var factory = {};		
		factory._data = null;		

		factory.getDataList = function () {
			
			var deferred = $q.defer();
			
			if (factory._data)
				deferred.resolve(factory._data);
			else{
				$http.get('http://localhost:3000/crossover')
				.then(function (data) {
					factory._data=data;
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});
	
			}
	
			
			return deferred.promise;
	
		};
		
		return factory;
	}
})();