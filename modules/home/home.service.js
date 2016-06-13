'use strict';
(function () { 
	angular.module('crossApp.home')
	.factory('crossApp.home.homeService', ['$q','$http',HomeService]);
	
	function HomeService($q,$http) {	
		  
		var factory = {};		
		factory._data = null;
	
		factory.getDataList = function () {
			
			var deferred = $q.defer();
			
			if (factory._data)
				deferred.resolve(factory._data);
			else{
				$http.get('db/data.json')
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